import React from 'react'
import styles from "./events.module.css";
import image from "../../Assets/Images/image1_events.jfif";
// import { IoLocation } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
// import {IoTicket} from 'react-icons/io';
import {GiTicket} from 'react-icons/gi';


const Card = () => {
  return (
    <div className={styles.container}>
    <div>x``
      <img src={image} alt="" />
    </div>
    <div>
      <div className={styles.heading}>Google Kickstart Workshop</div>
      <div className={styles.date}>18 August 2022</div>
      <div className={styles.location}>
        <div className={styles.locationIcon}>
          <MdLocationPin size={25} />
        </div>
        <div className={styles.locationContent}> Main Auditorium , Admin Block</div>
      </div>
      <div className={styles.ticket}>
        <div className={styles.ticketIcon}>
          <GiTicket size={25} />
        </div>
        <div className={styles.ticketContent}>$10.99</div>
      </div>
      <div className={styles.buttonContainer}>
      <button>
        <div className={styles.buttonText}>Join</div>
      </button>
      </div>
    </div>
  </div>
  )
}

export default Card