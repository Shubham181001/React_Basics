import { useState, useEffect } from "react"

const Fetch = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users').then(response => response.json()).then(data => setUsers(data)).catch(error => console.error(error));
    });

  return (
    <div>
        <h1>User List</h1>
        <ol>
            {
                users.map(user => (
                    <li key = {user.id}>
                        <a href={user.html_url}>{user.login}</a>
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default Fetch