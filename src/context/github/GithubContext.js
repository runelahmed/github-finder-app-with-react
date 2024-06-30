import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext();



export const GithubProvider = ({children}) => {
    const initialState = {
      users: [],
      loading: false
    }


    const [state, dispatch] = useReducer(githubReducer, initialState)
  
    
    // Get search results
      const searchUsers = async (text) => {
        const params = new URLSearchParams({
          q:text
        });

        try {
          setLoading();
          const response = await fetch(`https://api.github.com/search/users?${params}`);

          // Check if the response is OK
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
    
          const {items} = await response.json();
         dispatch({
          type: 'GET_USERS',
          payload: items,
         })
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }

      // Set Loading
      const setLoading = () => dispatch({type: 'SET_LOADING'})

      // Clear users
      const clearUsers = () => dispatch({type: 'CLEAR_USERS'})
      return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext