import React, { useState } from "react";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InteriorDesign from "@/components/Interiordesign";
import Popup from "@/components/Popup";
import styles from "../src/styles/pages/Projects.module.scss";

export default function Projects() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState(null);

  const eventData = {
    attributes: {
      imageSrc: "/img/bannerimg1.jpg",
      venue: "Venue Name",
      date: "2024-07-21",
      title: "Siddharth Title",
      eventImages: {
        data: [
          {
            attributes: {
              url: "/img/good-company/img_1.jpg",
            },
          },
          {
            attributes: {
              url: "/img/good-company/img_3.jpg",
            },
          },
          {
            attributes: {
              url: "/img/good-company/img_3.jpg",
            },
          },
          {
            attributes: {
              url: "/img/good-company/img_3.jpg",
            },
          },
          {
            attributes: {
              url: "/img/good-company/img_3.jpg",
            },
          },
          
          // Add more images as needed
        ],
      },
    },
  };

  const handleInteriorDesignClick = () => {
    setSelectedEventData(eventData.attributes);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedEventData(null);
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={`${styles.index_page} bg_secondary`}>
        <div className="container">
          <div className="font_secondary text_3xl">Interior Design</div>
          <div>
            <InteriorDesign
              eventData={eventData.attributes}
              setPopupVisible={handleInteriorDesignClick}
            />

            {popupVisible && (
              <Popup
                eventData={selectedEventData}
                onClose={handleClosePopup}
                setPopupVisible={setPopupVisible}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
