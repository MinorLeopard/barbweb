import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, GitHub } from "react-icons/fa";

function CardComponent(props) {
    return (
        <div>
            <div className="flex flex-col justify-end w-64 overflow-hidden bg-gray-600 h-72" >
                <div className="-ml-12 transform translate-y-12 bg-gray-200 h-36 w-96 -rotate-6 lg:translate-y-32 lg:transition-all lg:duration-75 lg:ease-linear lg:hover:translate-y-12">
                    <div className="flex flex-row justify-between w-64 p-5 ml-12 transform rotate-6">
                        <div>
                            <p className="text-2xl font-bold">{props.name}</p>
                            <p className="">{props.jobTitle}</p>
                        </div>
                        <div className="flex flex-col gap-2.5 -mt-5 lg:gap-1.5 lg:-mt-1 ">
                            <FaGithub fontSize="20px" cursor="pointer" className="lg:hover:text-gray-700"/>
                            <FaLinkedin fontSize="20px" cursor="pointer" className="lg:hover:text-gray-700"/>
                            <FaTwitter fontSize="20px" cursor="pointer" className="lg:hover:text-gray-700"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;