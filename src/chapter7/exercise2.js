// Robot Efficiency
//
// Can you write a robot that finishes the delivery task faster than
// goalOrientedRobot?

import { roadGraph, findRoute } from "./robot.js";

export const myRobot = ({ place, parcels }, route) => {
  if (route.length == 0) {
    route = shortestRemainingRoute(place, parcels);
  }
  return { direction: route[0], memory: route.slice(1) };
};

const shortestRemainingRoute = (place, parcels) => {
  return parcels
    .map((parcel) =>
      findRoute(roadGraph, place, nextDestination(place, parcel)),
    )
    .reduce(shortestRoute);
};

const nextDestination = (place, parcel) =>
  parcel.place == place ? parcel.address : parcel.place;

const shortestRoute = (a, b) => (a.length < b.length ? a : b);
