import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./pages/layout";

import AddOrder from "./pages/addOrder";
import AddUser from "./pages/addUser";
import EditOrder from "./pages/editOrder";
import Login from "./pages/login";
import OrdersList from "./pages/ordersList";
import PrintOrder from "./pages/printOrder";
import Profile from "./pages/profile";
import ScanOrder from "./pages/scanOrder";
import Welcome from "./pages/welcome";

import Refresh from "./components/refresh";
import DemoLogIn from "./components/demoLogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<OrdersList />} />
        <Route path="add" element={<AddOrder />} />
        <Route path="add/demoLogin" element={<DemoLogIn />} />
        <Route path="users/add" element={<AddUser />} />
        <Route path="users/add/demoLogin" element={<DemoLogIn />} />
        {/* DemoLogIn should be removed prior to production */}
        <Route path="/demoLogin" element={<DemoLogIn />} />
        <Route path="orders/:id" element={<EditOrder />} />
        <Route path="orders/:id/demoLogin" element={<DemoLogIn />} />
        <Route path="login" element={<Login />} />
        <Route path="login/demoLogin" element={<DemoLogIn />} />
        <Route path="orders" element={<OrdersList />} />
        <Route path="orders/demoLogin" element={<DemoLogIn />} />
        <Route path="print/:id" element={<PrintOrder />} />
        <Route path="print/:id/demoLogin" element={<DemoLogIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/demoLogin" element={<DemoLogIn />} />
        {/* Refresh should be removed prior to production */}
        <Route path="refresh" element={<Refresh />} />
        <Route path="scan/:id" element={<ScanOrder />} />
        <Route path="scan/:id/demoLogin" element={<DemoLogIn />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="welcome/demoLogin" element={<DemoLogIn />} />
        <Route path="*" element={<OrdersList />} />
      </Route>
    </Routes>
  );
}

export default App;

/*

*/
