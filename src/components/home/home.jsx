import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAllCompanies, getAllEmployees } from "../../redux/actions/actions.js";


export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allCompanies = useSelector((state) => state.companies);
  const allEmployees = useSelector((state) => state.employees);
  
  useEffect(() => {
    dispatch(getAllCompanies())
    dispatch(getAllEmployees())
  }, [dispatch]); 


  return (
    <div>
      <button type="submit" onClick={() => navigate("/updatecompany")}>
        Update Company
      </button>
      <button type="submit" onClick={() => navigate("/delete")}>
        Delete Company
      </button>
      <button type="submit" onClick={() => navigate("/registercompany")}>
        Create Company
      </button><br />
      <button type="submit" onClick={() => navigate("/updateemployee")}>
        Update Employee
      </button>
      <button type="submit" onClick={() => navigate("/delete")}>
        Delete Employee
      </button>
      <button type="submit" onClick={() => navigate("/registeremployee")}>
        Create Employee
      </button>
      <table>
      <thead>
        <tr>
          <th colSpan="4">Companies</th>
          <th colSpan="4">Employees</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>CUIT</th>
          <th>ID</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>DNI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="4">
            <table>
              <tbody>
                {allCompanies?.map((company) => (
                  <tr key={company.companyId}>
                    <td>{company.companyId}</td>
                    <td>{company.companyName}</td>
                    <td>{company.companyAddress}</td>
                    <td>{company.companyCuit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td colSpan="4">
            <table>
              <tbody>
                {allEmployees?.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.employeeLastName}</td>
                    <td>{employee.employeeDni}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};