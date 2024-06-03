import { useQuery } from "@tanstack/react-query";

interface Movie {
    id: string;
    name: string
}

async function getUsers(delay?: number): Promise<Movie[]> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json"
      },
    };
  
    const response = fetch(
      `https://jsonplaceholder.typicode.com/users${delay ? `?_delay=${delay}` : ''}`,
      options
    )
      .then(response => {
        if (!response.ok) {
            return Promise.reject(new Error('Failed to load the data'))
        }

        return response.json();
      })
  
    return response;
  }

const FETCH_DELAY = 3_000; // 3s

function Users() {
    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: () => getUsers(FETCH_DELAY)
    });
    
      return (
        <>
          {users?.map(user => {
            return <article key={user.id}>
              <h3>{user.name}</h3>
            </article>
          })}
        </>
      );
}

export default Users;