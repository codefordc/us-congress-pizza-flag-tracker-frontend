import React, { useContext } from "react";

import { isUser } from "../components/permissions";
import Login from "./login";
import ProfileView from "../components/profileView";
import UserContext from "../components/userContext";

const Profile = () => {
  const { setUserDisplay } = useContext(UserContext); // rerenders when user logs in

  return isUser() ? <ProfileView /> : <Login />;
};
export default Profile;
