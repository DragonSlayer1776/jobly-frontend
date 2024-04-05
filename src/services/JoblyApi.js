import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class JoblyApi {
    static token;

    static async getCompanies() {
        // Implementation of the method
        let res = await this.request("companies"); // Assuming 'request' is a method handling API calls
        return res.companies; // Or however the response is structured
    }

    // Method to get all jobs
    static async getJobs() {
        const response = await this.request("jobs"); // Adjust "jobs" if your endpoint is different
        return response.jobs; // Assuming the backend returns an object with a jobs array
    }

    static async request(endpoint, data = {}, method = "get") {
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get") ? data : {};

        // Log the request data just before making the API call
        console.log("Request Data:", { url, method, data, params, headers });

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        this.token = res.token; // Save the token
        return res.user; // Return user info
    }

    static async register(data) {
        let res = await this.request(`auth/register`, data, "post");
        this.token = res.token; // Save the token
        return res.user; // Return user info
    }

    // Update user profile
    static async updateProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user; // Assuming the backend returns the updated user
    }

    // Method to apply to a job
    static async applyToJob(username, jobId) {
        let res = await this.request(`jobs/${jobId}/apply`, { username }, "post");
        return res.message; // Assuming the backend returns a confirmation message
    }
}

export default JoblyApi;
