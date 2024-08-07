const initialState = {
    companies: [],
    employees: [],
    company: {},
    employee: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_COMPANIES": return {...state, companies: action.payload};
        case "GET_COMPANY": return {...state, company: action.payload};
        case "GET_ALL_EMPLOYEES": return {...state, employees: action.payload};
        case "GET_EMPLOYEE": return {...state, employee: action.payload};
        default: return state; 
    }
}

export default rootReducer;