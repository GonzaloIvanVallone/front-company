import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { postCompany } from "../../redux/actions/actions.js";

export const RegisterCompany = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [companyData, setCompanyData] = useState({
      companyName: '',
      companyAddress: '',
      companyCuit: '',
    });
  

    const handleChange = (e) => {
        setCompanyData({
        ...companyData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
        dispatch(postCompany(companyData));
        setCompanyData({
            companyName: '',
            companyAddress: '',
            companyCuit: '',
        });
    };
  
    return (
      <div>
        <h1>Register Company</h1>
        <form onSubmit={handleSubmit}>
          <div>
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
          <button type="submit" onClick={() => navigate("/")}>Register Company</button>
        </form>
      </div>
    );
};