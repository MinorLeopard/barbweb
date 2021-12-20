import React from "react";
import CardComponent from "./CardComponent";

function CardDisplay() {
    return (
        <div className="mb-5 flex flex-col items-center mt-12 gap-10 lg:flex-row lg:justify-center lg:w-10/12 lg:ml-auto lg:mr-auto">
            <CardComponent 
                name="Mary Jane"
                jobTitle="Web Developer"
            />
            <CardComponent 
                name="Mary Jane"
                jobTitle="Web Developer"
            />
            <CardComponent 
                name="Mary Jane"
                jobTitle="Web Developer"
            />
            <CardComponent 
                name="Mary Jane"
                jobTitle="Web Developer"
            />
            <CardComponent 
                name="Mary Jane"
                jobTitle="Web Developer"
            />
        </div>
    )
}

export default CardDisplay;