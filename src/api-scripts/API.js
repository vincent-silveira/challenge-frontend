import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

// Fetch All challenges
export  async function fetchAllChallenge() {
    try {
        const response = await axios.get(`${backend_url}challenge`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// Add a challenge
export  async function addChallenge(challenge) {
    try {
        const response = await axios.post(`${backend_url}challenge`, challenge);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// Delete a challenge
export  async function deleteChallenge(id) {
    try {
        const response = await axios.delete(`${backend_url}challenge/id=${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// Update a challenge
export  async function updateChallenge(challenge) {
    try {
        const id = challenge.id;
        const response = await axios.put(`${backend_url}challenge/id=${id}`, challenge);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// Fetch a challenge
export  async function fetchChallenge(id) {
    try {
        const response = await axios.get(`${backend_url}challenge/id=${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

