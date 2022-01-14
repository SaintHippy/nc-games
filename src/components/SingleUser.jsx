import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../utils/api";

const SingleUser = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserByUsername(username).then((userFromServer) => {
      setUser(userFromServer);
    });
  }, [username]);

  console.log(user);

  return (
    <div>
      <h1>User: {user.name} </h1>
      <h2>Name: {user.username}</h2>
    </div>
  );
};

export default SingleUser;
