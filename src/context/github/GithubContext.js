import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext();



export const GithubProvider = ({children}) => {
    const initalState = {
      users: [],
      loading: true
    }


    const [state, dispatch] = useReducer(githubReducer, initalState)
  
    
      const fetchUsers = async () => {
        try {
          const response = await fetch(`https://api.github.com/users`);

          // Check if the response is OK
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
    
          const data = await response.json();
         dispatch({
          type: 'GET_USERS',
          payload: data,
         })
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
      return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext