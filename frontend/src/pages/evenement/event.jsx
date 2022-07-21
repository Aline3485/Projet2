/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import Navbar from "../../Nav-Bar/Navbar";
import axios from "axios";
import "./event.css";
import React, { useState, useEffect } from "react";
import DisplayList from "@components/DisplayList";
import DetailsContext from "@components/context/DetailsContext";
import Loupe from "../../assets/img/recherche.png";

function Event() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&countryCode=FR&locale=*&city=Paris&size=100&apikey=GbGBJquA3zcjVAQzPaqXnz3EWgg1BK9f"
      )
      .then((events) => events.data._embedded.events)

      // Use this data to update the state
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div>
      <div className=" eventbody">
        <Navbar />
        <div className="remplissage">
          <div className="search-resultsevent">
            <div className="event-containerevent">
              <input type="text" className="searchevent" />
              <img className="gif" src={Loupe} alt="" />
            </div>
            <div className="event">
              <div className="descriptionevent">
                <div className="descriptionbackground" />
                <DetailsContext.Provider value={{ events }}>
                  <DisplayList />
                </DetailsContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
