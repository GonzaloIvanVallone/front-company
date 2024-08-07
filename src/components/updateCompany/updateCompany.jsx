import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateCompany } from "../../redux/actions/actions.js";

export const UpdateCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    companyName: '',
    companyAddress: '',
    companyCuit: '',
  });

  const [companyId, setCompanyId] = useState(0)

  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value
    });
  };

  const handleIdChange = (e) => {
    setCompanyId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(updateCompany(companyId, companyData));
  };

  return (
    <div>
      <h1>Update Company</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>
            ID:
            <input
              type="number"
              name="companyId"
              value={companyId}
              onChange={handleIdChange}
              placeholder="Enter company id"
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={companyData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="companyAddress"
              value={companyData.companyAddress}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </label>
        </div>
        <div>
          <label>
            CUIT:
            <input
              type="text"
              name="companyCuit"
              value={companyData.companyCuit}
              onChange={handleChange}
              placeholder="Enter CUIT"
            />
          </label>
        </div>
        <button type="submit" onClick={() => navigate("/")}>Update Company</button>
      </form>
    </div>
  );
};