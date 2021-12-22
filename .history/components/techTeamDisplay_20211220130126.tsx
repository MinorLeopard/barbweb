import React from "react";
import CardComponent from "./CardComponent";

function CardDisplay() {
    return (
        <div className="grid flex-col items-center grid-cols-3 gap-10 mt-12 mb-5 lg:flex-row lg:justify-center lg:w-10/12 lg:ml-auto lg:mr-auto">
            <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
               <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
               <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
             <CardComponent className=" grid-1/3"
                name="Mary Jane"
                jobTitle="Web Developer"
            />
        </div>
    )
}

export default CardDisplay;
