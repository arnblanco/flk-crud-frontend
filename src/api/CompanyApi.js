import axios from "axios";


const baseURL = 'http://localhost:8000/api';

const CompanyApi = axios.create({
    baseURL: baseURL,
})

export default CompanyApi