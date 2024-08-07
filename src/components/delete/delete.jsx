import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCompany, deleteEmployee } from '../../redux/actions/actions'; 


export const Delete = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [companyId, setCompanyId] = useState('');
    const [employeeId, setEmployeeId] = useState('');
  
    const handleCompanyIdChange = (e) => {
      setCompanyId(e.target.value);
    };
  
    const handleEmployeeIdChange = (e) => {
      setEmployeeId(e.target.value);
    };

    const handleDeleteCompany = () => {
      dispatch(deleteCompany(companyId));
      navigate("/")
    };

    const handleDeleteEmployee = () => {
      dispatch(deleteEmployee(employeeId));
      navigate("/")
    };

  return (
    <div>
      <div>
        Delete company
        <input
            type="text"
            placeholder="Enter company ID"
            value={companyId}
            onChange={handleCompanyIdChange}
          />
        <button onClick={handleDeleteCompany}>Delete Company</button>
      </div>
      <div>
        Delete employee
        <input
            type="text"
            placeholder="Enter employee ID"
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
        <button onClick={handleDeleteEmployee}>Delete Employee</button>
      </div>
    </div>
  );
};

