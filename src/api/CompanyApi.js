import axios from "axios";

const baseURL = `${ process.env.SERVER_API }/api`;

const CompanyApi = axios.create({
    baseURL: baseURL,
})

export default CompanyApi