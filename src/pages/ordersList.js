import React from "react";

import { isUser } from "../components/protectedRoute/permissions";
import OrdersView from "../components/ordersView";
import Welcome from "./welcome";

const OrdersList = () => {
  return isUser() ? <OrdersView /> : <Welcome />;
};

export default OrdersList;
