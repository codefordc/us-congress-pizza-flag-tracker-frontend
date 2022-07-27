import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { isUser } from "../components/permissions";
import LoginSubComponent from "../components/loginSubComponent";
import ScanView from "../components/scanOrder/scanView";
import UserContext from "../components/userContext";

const ScanOrder = () => {
  const { setUserDisplay } = useContext(UserContext);  // rerenders when user logs in
  const params = useParams("/scan/:id");

  return isUser() ? <ScanView scanId={params.id} /> : <LoginSubComponent />;
};

export default ScanOrder;
