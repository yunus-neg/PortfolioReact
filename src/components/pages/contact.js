import React, { Component } from "react";
import "../../App.css";
class contact extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Contact</h1>
          <img
            src="https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png"
            onClick={() => window.open("https://www.youtube.com")}
            alt=""
            className="logo"
          />
          <img
            src="http://thenewsafrica.com/wp-content/uploads/2018/07/twitter-round-logo-png-transparent-background-7-background-check-all-twitter-logo-transparent-custom-logo.png"
            onClick={() => window.open("https://www.twitter.com")}
            alt=""
            className="logo"
          />
          <img
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            onClick={() => window.open("https://www.github.com")}
            alt=""
            className="logo"
          />
        </center>
      </div>
    );
  }
}

export default contact;
