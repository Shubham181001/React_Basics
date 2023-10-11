// import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Fetch = () => {
    const [users] = useFetch();
  
  return (
    <div>
      <h1>User List</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url}>{user.login}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Fetch;
