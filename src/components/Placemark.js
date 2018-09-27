import React from "react";

import { Placemark } from "react-yandex-maps";

class PlacemarkView extends React.Component {
  render() {
    console.log("placemark", this.props);
    return (
      <Placemark
        // The geometry description.
        geometry={{
          type: "Point",
          coordinates: this.props.placemarkInfo.coordinates
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: ""
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: "islands#redStretchyIcon",
          // The placemark can be moved.
          draggable: false
        }}
        onDragEnd={this.onMove}
      />
    );
  }
}

export default PlacemarkView;
