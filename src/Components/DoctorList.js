import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import DoctorService from "../Services/DoctorService";
import Doctor from "./Doctor";

const DoctorList =() =>{
    const navigate=useNavigate();

    const[loading, setLoading]= useState(true);
    const[doctor, setDoctor]=useState(null);

    useEffect(() =>{
        const fetchData=async ()=>{
            setLoading(true);
            try{
                const response=await DoctorService.getAllDoctors();
                setDoctor(response.data);
            }catch(error){
                setDoctor([]);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteDoctor =(e, doctorId) =>{
        e.preventDefault();
        DoctorService.deleteDoctor(doctorId).then((res) =>{
            if(doctor){
                setDoctor((prevElement) =>{
                    return prevElement.filter((doctor) => doctor.doctorId !==doctorId);
                });
            }
        });
    };

    return(
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                   onClick={() =>navigate("/addDoctor")}
                   className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Doctor
                   </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                First Name
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Last Name
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Contact Details
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Specialization
                            </th>
                        </tr>
                    </thead>
                    {!loading &&(
                        <tbody className="bg-white">
                            {
                                doctor.map((doctor) =>(
                                    <Doctor
                                       doctor={doctor}
                                       deleteDoctor={deleteDoctor}
                                       key={doctor.doctorId}></Doctor>
                                ))
                            }
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default DoctorList;