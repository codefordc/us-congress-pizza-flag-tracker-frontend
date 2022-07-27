import React, { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { editOrderControl, isUser } from "../components/permissions";
import EditView from "../components/editView";
import LoginSubComponent from "../components/loginSubComponent";
import UserContext from "../components/userContext";

const EditOrder = () => {
  const params = useParams("/orders/:id");
  let navigate = useNavigate();
  const { setUserDisplay } = useContext(UserContext);  // rerenders when user logs in

  return isUser() ? (  
    editOrderControl() ? (
      <EditView editId={params.id} navigate={navigate} />
    ) : (
      <Navigate to="/" replace />
    )
  ) : (
    <LoginSubComponent />
  );
};

export default EditOrder;
