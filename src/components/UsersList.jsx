import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getUsers } from "../utils/api";
// import "../styles/App.css";

const UserList = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((UsersFromServer) => {
      setUsers(UsersFromServer);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {Users.map((element) => {
          return (
            <li key={element.slug}>
              <p>{element.slug}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
