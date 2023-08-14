import React from "react";
import TrackMap from "./TrackMap";

const Map = ({locations}) => {

  // const locations = [
  //   { lat: 40.712776, lng: -74.005974 }, // New York City
  //   { lat: 34.052235, lng: -118.243683 }, // Los Angeles
  //   // Add more coordinates here
  // ];

  return (
    <div className="sticky top-3">
      <TrackMap locations={locations} />
    </div>
  );
};

export default Map;