import React from "react";
import { Route, withRouter } from "react-router-dom";

import AuthContainer from "../containers/AuthContainer";
import NavBar from "../components/NavBar";
import HomeContainer from "../containers/HomeContainer";

import { connect } from "react-redux";
import * as actions from "../ducks/auth-duck/Actions";
import * as selectors from "../ducks/auth-duck/Selectors";
import { withStyles } from "material-ui";

const styles = {
  container: {
    height: "100%",
    width: "100%"
  }
};

class AppContainer extends React.Component {
  render() {
    return (
      <div className={this.props.classes.container}>
        <NavBar
        // username={this.props.username}
        // isAuth={this.props.isAuth}
        // logOut={this.props.logOut}
        />
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={AuthContainer} />

        {/* <Route path="/event/:id" component={EventContainer} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withStyles(styles)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AppContainer)
  )
);
