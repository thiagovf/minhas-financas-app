import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, objeto) { 
        const urlRequest = `${this.apiurl}${url}`
        return httpClient.post(urlRequest, objeto);
    }

    put(url, objeto) {
        const urlRequest = `${this.apiurl}${url}`
        return httpClient.put(urlRequest, objeto);
    }

    delete(url) {
        const urlRequest = `${this.apiurl}${url}`
        return httpClient.delete(urlRequest);
    }

    get(url) {
        const urlRequest = `${this.apiurl}${url}`
        return httpClient.get(urlRequest);
    }
}

export default ApiService;