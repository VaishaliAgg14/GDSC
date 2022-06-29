import React from 'react';
import Card from './card';
import styles from './events.module.css';

const Events = () => {
  return (
    <div>
    <h1>Events and Workshops</h1>
    <div className={styles.eventsContainer}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
  </div>
  )
}

export default Events