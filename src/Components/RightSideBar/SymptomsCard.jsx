import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//👉 Creating the dummy data for our symptoms card 
const cards = [
    {
        image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-sneezing-png-image_401619838_wh1200.png",
        title: "Fever & Chills",
        description: "One of the most common symptoms of Covid-19 is a high fever with chills.",
        color: "bg-purple-500",
    },
    {
        image: "https://cdn0.iconfinder.com/data/icons/coronavirus-140/512/woman_girl_high_fever-512.png",
        title: "Cough & Sore Throat",
        description: "Persistent cough and sore throat are key indicators of Covid-19.",
        color: "bg-green-500",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/3210/3210004.png",
        title: "Shortness of Breath",
        description: "Breathing difficulties can be a serious symptom of Covid-19.",
        color: "bg-blue-500",
    },
];


const SymptomsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 👉 Handilng the Swipe left 
    const handleSwipeLeft = () => setCurrentIndex(prevIndex => prevIndex === cards.length - 1 ? 0 : prevIndex + 1)


    return (
        <div className="flex transition-all ease-linear duration-300 cursor-pointer font-Poppins justify-start items-start md:justify-center md:items-center my-2 md:my-5 lg:my-6 xl:my-8 w-full p-5">
            <div

                className={`w-full h-auto p-6 rounded-xl shadow-lg transition-transform duration-300 ${cards[currentIndex].color}`}
            >
                <div className="flex flex-col items-center text-center text-white">
                    <div className="w-56 h-56 bg-white rounded-full overflow-hidden mb-4">
                        <img
                            src={cards[currentIndex].image}
                            alt={cards[currentIndex].title} loading="lazy"
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div className="w-full space-x-2 flex justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{cards[currentIndex].title}</h2>
                            <p className="text-sm">{cards[currentIndex].description}</p>
                        </div>
                        <div>
                            <button
                                className="mt-6 transition-all ease-linear duration-300 flex justify-center items-center rounded-full hover:bg-white hover:text-black  text-white h-10 w-10"
                                onClick={handleSwipeLeft}
                            >
                                <FontAwesomeIcon className="text-white hover:text-black font-bold text-2xl" icon={faArrowRight} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SymptomsCard;
