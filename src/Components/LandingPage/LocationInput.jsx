// LocationInput.jsx
import React from "react";
import LoadingSpinner from "../LoaderSpinner";

const LocationInput = ({
  query,
  setQuery,
  isLoading,
  geoLocation,
  check,
  res,
}) => {
  return (
    <div className="trip" id="appending">
      <div className="check">
        <input
          className="chinu"
          id="inputt"
          type="text"
          placeholder="Enter your delivery location"
          autoFocus={true}
          spellCheck={false}
          onChange={(e) => setQuery(e.target.value)}
          value={isLoading ? "Fetching your current location..." : query}
        />

        <button className="posey" onClick={geoLocation}>
          <i className="far fa-location" /> Locate Me
        </button>

        <button onClick={check} id="changing" value="toogle_food">
          {isLoading ? <LoadingSpinner /> : "Find Food"}
        </button>
      </div>
    </div>
  );
};

export default LocationInput;
