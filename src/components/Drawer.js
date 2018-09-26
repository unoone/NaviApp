import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import PlaceInfo from "./PlaceInfo";

import * as actions from "../ducks/styleComponent-duck/Actions";
import * as selectors from "../ducks/styleComponent-duck/Selectors";
import { connect } from "react-redux";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  container: {
    width: "auto"
  }
};

class DrawerComponent extends React.Component {
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.drawerState });
  }
  toggleDrawer = () => {
    // this.setState({ open: false });

    this.props.editDrawerState(false);
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="persistent"
        className={classes.container}
        anchor="right"
        open={this.state.open}
        onClose={this.toggleDrawer}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          tabIndex={0}
          role="button"
          // onClick={this.toggleDrawer()}
          // onKeyDown={this.toggleDrawer()}
        >
          <PlaceInfo toggleDrawer={this.toggleDrawer} />
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  drawerState: selectors.selectDrawerState(state)
});

const mapDispatchToProps = {
  editDrawerState: actions.edithDrawerState
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrawerComponent)
);
