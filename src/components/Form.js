import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import * as actionsMap from "../ducks/map-duck/Actions";
import * as selectorsMap from "../ducks/map-duck/Selectors";
import { connect } from "react-redux";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      description: "",
      coordinates: []
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ coordinates: nextProps.coordinates });
  }
  addPlacemark = e => {
    e.preventDefault();
    this.props.addPlacemarkInList(this.state);
    this.changePlacemarkVisible();
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  changePlacemarkVisible = () => {
    this.props.changePlacemarkVisible(false);
    this.props.toggleDrawer();
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Название"
          margin="dense"
          onChange={this.handleChange("placeName")}
        />
        {/* <TextField
          id="address"
          label="Адрес"
          margin="dense"
          onChange={this.handleChange("address")}
        /> */}
        <TextField
          id="description"
          label="Описание"
          margin="dense"
          onChange={this.handleChange("description")}
        />
        <button onClick={this.addPlacemark}>Добавить</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  coordinates: selectorsMap.selectCoordinates(state)
});

const mapDispatchToProps = {
  changePlacemarkVisible: actionsMap.addPlacemark,
  addPlacemarkInList: actionsMap.addPlacemarkInList
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
