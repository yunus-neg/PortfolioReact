import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import About from "../pages/about";
import Home from "../pages/home";
import Contact from "../pages/contact";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    background: "linear-gradient(45deg, #2196f3 90%, #21cbf3 30%)",
    width: window.width,
    height: window.height
  },
  bar: {
    // backgroundColor: "#6ebabd",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)"
  },
  tab: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)"
  }
});

class tabs extends React.Component {
  state = {
    value: 1
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <AppBar position="static" color="default" className={classes.bar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="contact" className={classes.tab} />
            <Tab label="home" className={classes.tab} />
            <Tab label="about" className={classes.tab} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Contact />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Home />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <About />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(tabs);
