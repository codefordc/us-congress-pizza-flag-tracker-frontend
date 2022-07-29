import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { isUser } from "../components/permissions";
import Login from "./login";
import PrintView from "../components/printView";
import UserContext from "../components/userContext";

const PrintOrder = () => {
  const params = useParams("/print/:id");
  const { setUserDisplay } = useContext(UserContext); // rerenders when user logs in

  return isUser() ? <PrintView printId={params.id} /> : <Login />;
};

export default PrintOrder;
