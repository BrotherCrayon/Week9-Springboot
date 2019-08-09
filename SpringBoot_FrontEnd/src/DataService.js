import axios from 'axios'

class DataService{

    retrieveShowAllRecords(){
        // sending reques tto the springboot server
        return axios.get(`http://localhost:8080/showall`)
    }

    retrieveShowRecord(id){
        return axios.get(`http://localhost:8080/show/${id}`)
    }

    deleteRecord(id){
        return axios.delete(`http://localhost:8080/delete/${id}`)
    }

    saverecord(Account){
        console.log("Account: ", Account);
        return axios.post(`http://localhost:8080/saverecord`, Account);
    }

    updateUser(id, Account){
        return axios.post(`http://localhost:8080/updaterecord/${id}`, Account);
    }

}
export default new DataService();