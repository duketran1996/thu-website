import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import ToolbarView from "../shared/ToolbarView";

const styles = theme => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },

  myName: {
    fontSize: "80px",
    marginTop: theme.spacing.unit * 30,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var { isLoaded, items } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <ToolbarView />
        <main className={classes.content}>
          <div className={classes.myName} />
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
