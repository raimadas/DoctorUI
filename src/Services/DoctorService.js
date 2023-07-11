import axios from "axios";

const DOCTOR_API_BASE_URL="http://localhost:8100/doctor";

class DoctorService{
    addDoctor(doctor){
        return axios.post(`${DOCTOR_API_BASE_URL}/add`, doctor);
    }

    getAllDoctors(){
        return axios.get(`${DOCTOR_API_BASE_URL}/getAll`);
    }

    getDoctor(doctorId){
        return axios.get(`${DOCTOR_API_BASE_URL}/get/${doctorId}`);
    }

    deleteDoctor(doctorId){
        return axios.delete(`${DOCTOR_API_BASE_URL}/delete/${doctorId}`)
    }

    updateDoctor(doctor, doctorId){
        return axios.put(`${DOCTOR_API_BASE_URL}/update/${doctorId}`, doctor)
    }
}


export default new DoctorService();