import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { postEmployee } from "../../redux/actions/actions.js";

export const RegisterEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [employeeData, setEmployeeData] = useState({
      employeeName: '',
      employeeLastName: '',
      birthDay: '',
      employeeDni:''
    });
  

    const handleChange = (e) => {
        setEmployeeData({
        ...employeeData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
        dispatch(postEmployee(employeeData));
        setEmployeeData({
            employeeName: '',
            employeeLastName: '',
            birthDay: '',
            employeeDni:''
        });
    };
  
    return (
      <div>
        <h1>Register Employee</h1>
        <form onSubmit={handleSubmit}>
          <div>
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
          <button type="submit" onClick={() => navigate("/")}>Register Employee</button>
        </form>
      </div>
    );
};