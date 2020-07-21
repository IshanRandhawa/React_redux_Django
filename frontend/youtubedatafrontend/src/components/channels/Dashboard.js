import React, { Fragment } from "react";
import Channels from "./Channels";
import GetCityData from "./GetCityData";
import "./GetData.css";

export default function Dashboard() {
  return (
    <Fragment>
      <GetCityData />
      <Channels />
    </Fragment>
  );
}
