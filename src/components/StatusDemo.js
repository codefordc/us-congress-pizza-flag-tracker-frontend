import React, { useState } from "react";

import { STATUSES, DEPTCODES } from "./Statuses.js";

const StatusDemo = () => {
  const initialStatusState = {
    id: null,
    login_office_code: "not logged in",
    current_description: "select a status",
    selection: "select",
  };
  const [status, setStatus] = useState(initialStatusState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStatus({ ...status, [name]: value });
  };

  const unLogged = (status.login_office_code === "not logged in")
    ? ""
    : <div>
        <h6>{status.current_description}</h6>
        <form>
          <div className="form-group">
            <label htmlFor="current_description">Status: </label>
            <select
              value={status.selection}
              // defaultValue={"select"}            
              // value={status.current_description}
              id="current_description"
              onChange={handleInputChange}
              name="current_description"
              >
              <option value="select" key="blank" hidden disabled>&nbsp;&nbsp;&nbsp;Select</option>
              {STATUSES && STATUSES.map((element, index) => {
                if ((status.login_office_code === element.office_code) || 
                (status.login_office_code === "ADMIN") || 
                ((element.office_code === "ALL") && (status.login_office_code !== "not logged in"))
                ) {
                  return (
                    <option value={element.description} key={index}>
                      #{element.sequence_num} {element.description}
                    </option>              
                  );
                } else return (<option hidden key={index} />)  // handle "Array.prototype.map() expects a value to be returned at the end of arrow function array-callback-return" error
              })}
            </select>
          </div>      
        </form>
      </div>;

   return (
    <div>
      <p>Demo to display Status options filtered by User Credintials</p>
      <p>faux Demo User Credintials to be replaced by User Database outputs</p>
      <h4>User: {status.login_office_code}</h4>
      <form>
        <div className="form-group">
          <label htmlFor="login_office_code">Log in: </label>
          <select
              value={status.selection}
              // defaultValue={"select"}
              // value={status.login_office_code}
              id="login_office_code"
              onChange={handleInputChange}
              name="login_office_code"
            >
            <option value="select" key="blank" disabled hidden>&nbsp;&nbsp;&nbsp;Select</option>
            {DEPTCODES && DEPTCODES.map((code, index) => {
              return (
                <option value={code.dept_code} key={index}>
                  {code.dept_code}
                </option>
              );
            })}
          </select>
        </div>
        <hr />
      </form>      
      {unLogged}
    </div>      
  );
}

export default StatusDemo;