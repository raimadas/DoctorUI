import React, {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import DoctorService from "../Services/DoctorService";

const UpdateDoctor=() =>{
    const {doctorId} =useParams();
    const navigate= useNavigate();
    const [doctor, setDoctor]= useState({
            doctorId: doctorId,
            firstName:"",
            lastName:"",
            contactDetails:"",
            specialization:"",

    });

    const handleChange =(e) =>{
        const value= e.target.value;
        setDoctor({...doctor,[e.target.name] : value});
    };

    useEffect(() =>{
        const fetchData =async () =>{
            try{
                const response=await DoctorService.getDoctor(doctor.doctorId);
                setDoctor(response.data);
            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateDoctor= (e) =>{
        e.preventDefault();
        console.log(doctor);
        DoctorService.updateDoctor(doctor, doctorId).then((response) =>{
            navigate("/doctorList");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1> Update Doctor</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
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

                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={updateDoctor}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
                            Update
                    </button>
                    <button
                        onClick={() => navigate("/doctorList")}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-green-700 py-2 px-6">
                            Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateDoctor;