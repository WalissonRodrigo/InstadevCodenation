import React, { useState, useEffect } from "react";
import UsersList from "../../containers/UsersList/UsersList";
import api from "../../api";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get.Users().then((data) => setUsers(data));
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
