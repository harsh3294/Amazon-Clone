import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  //   baseURL: "http://localhost:8001",
  baseURL: "https://cloneamazon.herokuapp.com/",
  // baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api"
  // baseURL: 'http://localhost:5001/clone-e8ec7/us-central1/api'
  // baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
});

export default instance;
