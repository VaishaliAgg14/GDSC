import React from "react";
import Card from "./card";
import styles from "./events.module.css";
<<<<<<< HEAD
import { useState } from "react";
import eve from "./events_upcoming.json";
import pastEve from './events_past.json';
=======

import eve from "./events_upcoming.json";
>>>>>>> e66c1d6b939b395737e6243b77f800e428d73716
const Events = () => {
  const [events, setEvents] = useState("U");
  const onClickUpcomingEventHandler =(e) => {
    e.preventDefault();
    setEvents("U");
  }
  const onClickPastEventHandler =(e) => {
    e.preventDefault();
    setEvents("P");
  }
  return (
<<<<<<< HEAD
     <div>
      <h1 className={styles.super}>Events and Workshops</h1>
      <div className={styles.eventHeading}>
      <h2 className={(events === "U") ? styles.eventChange : ""} onClick={onClickUpcomingEventHandler} >Upcoming Events</h2>
      <h2>|</h2>
      <h2 className={(events === "P") ? styles.eventChange : ""} onClick={onClickPastEventHandler} >Past Events</h2>
      </div>
      { events === "U" && (
        <div className={styles.eventsContainer}>
=======
    <div>
      <h1 className={styles.super}>Events and Workshops</h1>
      <div className={styles.eventsContainer}>
>>>>>>> e66c1d6b939b395737e6243b77f800e428d73716
        {eve.map((even) => {
          return (
            <>
              <Card
                key={even.id}
                date={even.date}
                venue={even.venue}
                name={even.name}
              />
            </>
          );
        })}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
<<<<<<< HEAD
      )}
      { events === "P" && (
        <div className={styles.eventsContainer}>
        {pastEve.map((even) => {
          return (
            <>
              <Card
                key={even.id}
                date={even.date}
                venue={even.venue}
                name={even.name}
              />
            </>
          );
        })}

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      )}
      
=======
>>>>>>> e66c1d6b939b395737e6243b77f800e428d73716
    </div>
  );
};

export default Events;
