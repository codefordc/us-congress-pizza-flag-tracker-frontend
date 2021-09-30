import React from "react";
import { STATES } from "./states.js";
import { baseURL } from "../http-common";
const OrderForm = (props) => {
  const { order, setOrder, saveOrder, mode, deleteOrder } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="order_number">Order Number</label>
        <input
          type="text"
          className="form-control"
          id="order_number"
          required
          value={order.order_number}
          onChange={handleInputChange}
          name="order_number"
        />
      </div>

      <div className="form-group">
        <label htmlFor="usa_state">US State</label>
        <select
          value={order.usa_state}
          id="usa_state"
          onChange={handleInputChange}
          name="usa_state"
        >
          {STATES &&
            STATES.map((state, index) => {
              return (
                <option value={state.name} key={index}>
                  {state.name}
                </option>
              );
            })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="home_office_code">Congressional Office</label>
        <select
          value={order.home_office_code}
          id="home_office_code"
          onChange={handleInputChange}
          name="home_office_code"
          required
        >
          {STATES &&
            order.usa_state &&
            STATES.filter((state) => state.name === order.usa_state)[0][
              "districts"
            ].map((district, index) => {
              return (
                <option value={district} key={index}>
                  {district}
                </option>
              );
            })}
        </select>
      </div>

      {mode === "edit" ? (
        <>
          <div className="form-group">
            <label>QR Code</label>
            {order.uuid}
            <img
              src={baseURL + "/api/qrcode/" + order.uuid}
              alt="QR Code"
              align="right"
            />
          </div>
          {/* <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {order.published ? "Published" : "Pending"}
            </div> */}
        </>
      ) : null}

      {mode === "edit" && (
        <button className="btn badge-danger mr-2" onClick={deleteOrder}>
          Delete
        </button>
      )}
      <button
        disabled={
          !order.order_number || !order.usa_state || !order.home_office_code
        }
        onClick={saveOrder}
        className="btn btn-success"
      >
        {mode === "edit" ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default OrderForm;