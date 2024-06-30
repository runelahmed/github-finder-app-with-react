import { createContext, useState, useEffect } from "react";


const GithubContext = createContext();



export const GithubProvider = ({children}) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchUsers();
    }, []);
  
    
      const fetchUsers = async () => {
        try {
          const response = await fetch(`https://api.github.com/users`);

          // Check if the response is OK
          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }
    
          const data = await response.json();
         setUsers(data);
         setLoading(false)
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
      return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers
      }}>
        {children}
      </GithubContext.Provider>
}

export default GithubContext