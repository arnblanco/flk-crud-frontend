import axios from "axios";

const baseURL = 'https://flk-crud-backend.up.railway.app/api';

const CompanyApi = axios.create({
    baseURL: baseURL,
})

export default CompanyApi