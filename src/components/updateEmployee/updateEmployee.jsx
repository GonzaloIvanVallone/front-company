import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateEmployee } from "../../redux/actions/actions.js";

export const UpdateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    employeeId: '',
    employeeName: '',
    employeeLastName: '',
    birthDay: '',
    employeeDni: ''
  });

  const [employeeId, setEmployeeId] = useState(0)

  const handleIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(updateEmployee(employeeId, employeeData));
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ID:
            <input
              type="number"
              name="employeeId"
              value={employeeId}
              onChange={handleIdChange}
              placeholder="Enter employee id"
            />
          </label>
          <label>
            Employee Name:
            <input
              type="text"
              name="employeeName"
              value={employeeData.employeeName}
              onChange={handleChange}
              placeholder="Enter employee name"
            />
          </label>
        </div>
        <div>
          <label>
            Employee Last Name:
            <input
              type="text"
              name="employeeLastName"
              value={employeeData.employeeLastName}
              onChange={handleChange}
              placeholder="Enter employee last name"
            />
          </label>
        </div>
        <div>
          <label>
            Birthday:
            <input
              type="text"
              name="birthDay"
              value={employeeData.birthDay}
              onChange={handleChange}
              placeholder="Enter birthday"
            />
          </label>
        </div>
        <div>
          <label>
            Dni:
            <input
              type="text"
              name="employeeDni"
              value={employeeData.employeeDni}
              onChange={handleChange}
              placeholder="Enter dni"
            />
          </label>
        </div>
        <button type="submit" onClick={() => navigate("/")}>Update Employee</button>
      </form>
    </div>
  );
};