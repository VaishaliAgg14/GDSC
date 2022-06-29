import React from "react";
import Card from "./card";
import styles from "./events.module.css";

import eve from "./events_upcoming.json";
const Events = () => {
  return (
    <div>
      <h1 className={styles.super}>Events and Workshops</h1>
      <div className={styles.eventsContainer}>
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
    </div>
  );
};

export default Events;
