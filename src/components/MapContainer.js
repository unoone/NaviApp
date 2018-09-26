import { YMaps, Map, GeoObject, Placemark, Circle } from "react-yandex-maps";
import React from "react";
import axios from "axios";

import NewPlacemark from "./NewPlacemark";

import * as selectorsMap from "../ducks/map-duck/Selectors";
import { connect } from "react-redux";
// const mapState = { center: [54.996940099999996, 82.8952917], zoom: 10 };

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geoPosition: [],
      mapState: { center: [54.996940099999996, 82.8952917], zoom: 2 },
      placemarkVisible: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ placemarkVisible: nextProps.placemarkVisible });
  }
  componentDidMount() {
    // axios({
    //   method: "post",
    //   url: "https://api.naviaddress.com/api/v1.5/Addresses",
    //   data: {
    //     lat: 54.98272667421813,
    //     lng: 82.89529169999994,
    //     default_lang: "ru",
    //     address_type: "free"
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token": "24aca22d-ece2-41c0-9856-280792c7c9ea"
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
  }

  handleApiAvaliable = ymaps => {
    const setGeopos = geoPos => {
      this.setState({ geoPosition: geoPos });
    };
    const geolocation = ymaps.geolocation.get();
    geolocation.then(
      function(result) {
        // Добавление местоположения на карту.

        setGeopos(result.geoObjects.position);
      },
      function(err) {
        console.log("Ошибка: " + err);
      }
    );
    // console.log(ymaps.geolocation.get());
  };
  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <YMaps onApiAvaliable={ymaps => this.handleApiAvaliable(ymaps)}>
          <Map
            state={
              this.state.geoPosition.length === 0
                ? this.state.mapState
                : { center: this.state.geoPosition, zoom: 15 }
            }
            width="100%"
            height="90%"
          >

            <NewPlacemark
              geoPosition={this.state.geoPosition}
              placemarkVisible={this.state.placemarkVisible}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  placemarkVisible: selectorsMap.selsectVisibleStatus(state),
  placemarkList: selectorsMap.selsectPlacemarkList(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
