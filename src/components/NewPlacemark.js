import React from "react";
import { Placemark } from "react-yandex-maps";

import * as actions from "../ducks/map-duck/Actions";
import { connect } from "react-redux";

class NewPlacemark extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.props.addCoordinates(nextProps.geoPosition);
  }
  onMove = e => {
    this.props.addCoordinates(e.originalEvent.target.geometry._coordinates);
    console.log("coord", e.originalEvent.target.geometry._coordinates);
  };
  render() {
    return this.props.geoPosition.length != 0 && this.props.placemarkVisible ? (
      <Placemark
        // The geometry description.
        geometry={{
          type: "Point",
          coordinates: this.props.geoPosition
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: "Новая точка"
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: "islands#blackStretchyIcon",
          // The placemark can be moved.
          draggable: true
        }}
        onDragEnd={this.onMove}
      />
    ) : null;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addCoordinates: actions.addCoordinates
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlacemark);
