import React, { Fragment } from "react";
import Channels from "./Channels";
import GetCityData from "./GetCityData";
import "./GetData.css";
import LoadingSpinner from "./LoadingSpinner";
export default function Dashboard() {
  return (
    <Fragment>
      <GetCityData />
    </Fragment>
  );
}
