import React from "react";
import {useNavigate} from "react-router-dom";

const Doctor =({doctor, deleteDoctor})=>{
    const navigate=useNavigate();
    const editDoctor=(e, doctorId) =>{
        e.preventDefault();
        navigate(`/editDoctor/${doctorId}`);
    };

    return(
        <tr key={doctor.doctorId}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doctor.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doctor.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doctor.contactDetails}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{doctor.specialization}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap font-medium-sm">
                <a
                onClick={(e, doctorId)=> editDoctor(e, doctor.doctorId)}
                className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Edit
                </a>
                <a
                onClick={(e, doctorId)=> deleteDoctor(e, doctor.doctorId)}
                className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
                    Delete
                </a>
            </td>
        </tr>
    );
};

export default Doctor;