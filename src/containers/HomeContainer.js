import React from "react";
import MapContainer from "../components/MapContainer";

import Drawer from "../components/Drawer";
const divStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: "70px",
  height: "100%",
  width: "100%"
  // justifyContent: "space-between"
};

class HomeContainer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <MapContainer />
        {/* <PlaceInfo /> */}
        <Drawer />
      </div>
    );
  }
}

export default HomeContainer;
