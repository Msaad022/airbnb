import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";


const ManTrackMap = ({ locations }) => {

  useEffect(() => {
    const loader = new Loader({
        apiKey: "AIzaSyDIjXXnDF_9_DxPKiXamCzgkZFrwENWJHc",
        version: "weekly",
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.5421655, lng: -0.0022275 },
        zoom: 11,
      });

      // Add markers for each location
      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: location,
          map: map,
        });
      });
    });
  }, [locations]);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default ManTrackMap;

