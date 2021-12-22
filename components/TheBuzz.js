import React from "react";
import Image9 from "../images/image9.png";
import Image10 from "../images/image10.png";
import Image11 from "../images/image11.png";
import Image12 from "../images/image12.png";
import Image13 from "../images/image13.png";

function TheBuzz() {

    return (
        <div>
            <p className=" text-2xl text-center font-semibold lg:text-4xl">The Buzz</p>
            <div className="flex flex-row gap-5 justify-center mt-5 lg:gap-32 lg:mt-12">
                <img src={Image9} alt="image9" className="h-8 lg:h-16"/>
                <img src={Image10} alt="image9" className="h-8 lg:h-16"/>
                <img src={Image11} alt="image9" className="h-8 lg:h-16"/>
                <img src={Image12} alt="image9" className="h-8 lg:h-16"/>
                <img src={Image13} alt="image9" className="h-8 lg:h-16"/>
            </div>
        </div>
    );
}

export default TheBuzz;