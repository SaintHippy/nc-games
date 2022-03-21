import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../utils/api";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromServer) => {
      setUsers(usersFromServer);
    });
  }, []);

  return (
    <div>
      <div className="titleBar">
        <h1 className="titleText">Users</h1>
      </div>
      <div className="mainBody">
        <div className="wideBox">
          <ul>
            {users.map((user) => {
              return (
                <li key={user.username}>
                  <Link to={`/users/${user.username}`}>
                    <h2 className="listText">
                      blah
                      {user.username}
                    </h2>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
