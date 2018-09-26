import React from "react";
import axios from "axios";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Form from "./Form";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
});

class PlaceInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Место" />
            <Tab label="Ночлег" />
          </Tabs>
        </AppBar>
        {value === 0 && <Form toggleDrawer={this.props.toggleDrawer} />}
        {value === 1 && <Form />}
      </div>
    );
  }
}

export default withStyles(styles)(PlaceInfo);
