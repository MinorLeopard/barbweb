import React from "react";
import CardComponent from "./CardComponent";

function CardDisplay() {
    return (
        <div className="flex grid flex-col items-center grid-cols-3 gap-10 mt-12 mb-5 lg:flex-row lg:justify-center lg:w-10/12 lg:ml-auto lg:mr-auto">
            <CardComponent className=""
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=""
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=""
                name="Mary Jane"
                jobTitle="Web Developer"
            />
        </div>
    )
}

export default CardDisplay;