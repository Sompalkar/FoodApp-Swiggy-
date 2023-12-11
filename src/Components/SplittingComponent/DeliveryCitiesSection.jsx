import React, { useState, useEffect } from "react";
import {
  citiesData_1,
  citiesData_2,
  citiesData_3,
  citiesData_4,
} from "../../Citiesdata";

import "./DeliveryCitiesSection.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const DeliveryCitiesSection = () => {
  const cityDataArray = [
    citiesData_1,
    citiesData_2,
    citiesData_3,
    citiesData_4,
  ];

  const [shuffledCities, setShuffledCities] = useState([]);

  useEffect(() => {
    const shuffledData = cityDataArray.map((cityData) =>
      shuffleArray(cityData).slice(0, 10)
    );
    setShuffledCities(shuffledData);
  }, []);

  return (
    <section className="delivery-cities">
      {shuffledCities.map((shuffledCityList, categoryIndex) => (
        <div className={`category category-${categoryIndex + 1}`} key={categoryIndex}>
          <h3 className="category-heading">WE DELIVER TO</h3>
          <div className={`city-list city-list-${categoryIndex + 1}`}>
            {shuffledCityList.map((city, index) => (
              <div className={`city city-${categoryIndex + 1}`} key={index}>
                {city}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DeliveryCitiesSection;
