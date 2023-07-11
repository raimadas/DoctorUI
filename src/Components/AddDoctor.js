import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import DoctorService from "../Services/DoctorService";

const AddDoctor =() =>{
    const [doctor, setDoctor]=useState({
        doctorId:"",
        firstName:"",
        lastName:"",
        contactDetails:"",
        specialization:"",
    });

    const navigaye=useNavigate();

    const handleChange=(e) =>{
        const value=e.target.value;
        setDoctor({...doctor, [e.target.name]: value});
    };

    const addDoctor=(e) =>{
        e.preventDefault();
        DoctorService.addDoctor(doctor).then((response) =>{
            console.log(response);
            navigaye("/doctorList");
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    const reset =(e) =>{
        e.preventDefault();
        setDoctor({
            doctorId:"",
            firstName:"",
            lastName:"",
            contactDetails:"",
            specialization:"",

        });
    };

    return(
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1> Add new Doctor</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-blue-600 text-sm font-normal">
                        First Name
                    </label>
                    <input 
                       type="text"
                       name="firstName"
                       value={doctor.firstName}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Last Name
                    </label>
                    <input 
                       type="text"
                       name="lastName"
                       value={doctor.lastName}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Contact Details
                    </label>
                    <input 
                       type="text"
                       name="contactDetails"
                       value={doctor.contactDetails}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Specialization
                    </label>
                    <input 
                       type="text"
                       name="specialization"
                       value={doctor.specialization}
                       onChange={(e) => handleChange(e)}
                       className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <button 
                        onClick={addDoctor}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                            Save
                    </button>
                    <button 
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-green-700 py-2 px-6">
                            Clear
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddDoctor;