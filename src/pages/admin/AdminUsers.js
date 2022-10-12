import React from "react";
import UsersPage from "./components/UsersPage";
import axios from "axios";

const fetchUsers = async (abctr) => {
  const { data } = await axios.get("/api/users", {
    signal: abctr.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};

const AdminUsers = () => {
  return <UsersPage fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsers;
