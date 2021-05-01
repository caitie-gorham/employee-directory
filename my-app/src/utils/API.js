import axios from "axios";

// use axios to make API call to Random Users API
export default {
    employeesSearch: function () {
        return axios.get("https://randomuser.me/api/?results=15&nat=us")
    }
};
