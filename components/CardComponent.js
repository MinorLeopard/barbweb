import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, GitHub } from "react-icons/fa";

function CardComponent(props) {
    return (
        <div>
            <div className="w-64 h-72 bg-gray-600 overflow-hidden flex flex-col justify-end" >
                <div className="bg-gray-200 h-36 w-96 transform -ml-12 -rotate-6 
                translate-y-12 lg:translate-y-32 lg:transition-all lg:duration-75 lg:ease-linear lg:hover:translate-y-12">
                    <div className="transform rotate-6 p-5 ml-12 flex flex-row justify-between w-64">
                        <div>
                            <p className="font-bold text-2xl">{props.name}</p>
                            <p className="">{props.jobTitle}</p>
                        </div>
                        <div className="flex flex-col gap-2.5 -mt-5 lg:gap-1.5 lg:-mt-1 ">
                            <FaGithub fontSize="20px" cursor="pointer" className="lg:hover:text-gray-500"/>
                            <FaLinkedin fontSize="20px" cursor="pointer" className="lg:hover:text-blue-600"/>
                            <FaTwitter fontSize="20px" cursor="pointer" className="lg:hover:text-blue-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;