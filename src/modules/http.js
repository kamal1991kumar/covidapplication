import { storage } from "./index";
import Axios from "axios";
Axios.defaults.baseURL = "https://covid-compliance-application.herokuapp.com";

Axios.interceptors.request.use(
  function (config) {
    const _token = storage.token.get();

    if (_token != null) {
      config.headers.Authorization = `Bearer ${_token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    return Promise.resolve(response.data);
  },
  function (error) {
    if (error.message === "Network Error" && !error.response) {
      return Promise.reject({
        status: "failure",
        message: "Network Not found.",
      });
    } else if (error.response.status === 403) {
      return Promise.reject({
        status: "failure",
        message: "Network Not found.",
      });
    } else {
      return Promise.reject(error.response.data);
    }
  }
);

export const http = {
  userEmailVerification(data) {
    return Axios.post("/username", data);
  },
  userPasswordVerification(data) {
    return Axios.post("/password", data);
  },
  area: {
    getAll() {
      return Axios.get("/area");
    },
    add(data) {
      return Axios.post("/addArea", data);
    },
    delete(id) {
      return Axios.delete(`/delete/area/${id}`);
    },
  },
  category: {
    getAll() {
      return Axios.get("/category");
    },
    add(data) {
      return Axios.post("/addCategory", data);
    },
<<<<<<< HEAD
    task: {
        getAll() {
            return Axios.get('/allTasks');
        },
        add( data ) {
            return Axios.post('/addTask', data);
        },
        delete( id ) {
            return Axios.delete(`/delete/task/${id}`);
        },
        accept( data ){
            return Axios.put('/update/task', data);
        },
        reject( data ){
            return Axios.put('/reject/task', data);
        },
        edit(id,data){
            return Axios.put(`/edit/task/${id}`,data);
        },
        getpie(){
            return Axios.get('/getPieChartsValues');
        },
        getbar(){
            return Axios.get('/getBarGraphValues');
        },
        downloadreport(){
            return Axios.get('/report');
        }
    }
}
=======
    delete(id) {
      return Axios.delete(`/delete/category/${id}`);
    },
  },
  getCommonApi() {
    const location = Axios.get("/location");
    const allusers = Axios.get("/allusers");
    const frequency = Axios.get("/frequency");

    return Axios.all([location, allusers, frequency]);
  },
  task: {
    getAll() {
      return Axios.get("/allTasks");
    },
    add(data) {
      return Axios.post("/addTask", data);
    },
    delete(id) {
      return Axios.delete(`/delete/task/${id}`);
    },
    accept(data) {
      return Axios.put("/update/task", data);
    },
    reject(data) {
      return Axios.put("/reject/task", data);
    },
    edit(id, data) {
      return Axios.put(`/edit/task/${id}`, data);
    },
  },
  chart: {
    pie() {
      return Axios.get("/getPieChartsValues");
    },
    bar() {
      return Axios.get("/getBarGraphValues");
    },
  },
};
>>>>>>> 8970d51da58e131164a788582a512a807328f95a
