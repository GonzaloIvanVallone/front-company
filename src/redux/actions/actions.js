import axios from "axios";

const main_route = "http://localhost:8080/api/v1";


export const getAllCompanies = () => async (dispatch) => {
    try {
      let response = await axios.get(`${main_route}/getCompanies`);
      return dispatch({
        type: "GET_ALL_COMPANIES",
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const getCompany = (id) => async (dispatch) => {
    try {
      let response = await axios.get(`${main_route}/getCompany/${id}`);
      return dispatch({
        type: "GET_COMPANY",
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const getEmployee = (id) => async (dispatch) => {
    try {
      let response = await axios.get(`${main_route}/getEmployee/${id}`);
      return dispatch({
        type: "GET_EMPLOYEE",
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const getAllEmployees = () => async (dispatch) => {
    try {
      let response = await axios.get(`${main_route}/getEmployees`);
      return dispatch({
        type: "GET_ALL_EMPLOYEES",
        payload: response.data,
      });
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const postCompany = (payload) => async (dispatch) => {
    try {
      let response = await axios.post(`${main_route}/createCompany`, payload);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const postEmployee = (payload) => async (dispatch) => {
    try {
      let response = await axios.post(`${main_route}/createEmployee`, payload);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const updateCompany = (id, payload) => async (dispatch) => {
    try {
      let response = await axios.patch(`${main_route}/updateCompany/${id}`, payload);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const updateEmployee = (id, payload) => async (dispatch) => {
    try {
      let response = await axios.patch(`${main_route}/updateEmployee/${id}`, payload);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const deleteCompany = (id) => async () => {
    try {
      let response = await axios.delete(`${main_route}/deleteCompany/${id}`);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};

export const deleteEmployee = (id) => async () => {
    try {
      let response = await axios.delete(`${main_route}/deleteEmployee/${id}`);
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
    }
};