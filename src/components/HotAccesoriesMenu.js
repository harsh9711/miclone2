import React, { useState } from "react";
import "../styles/HotAccessoriesMenu.css";
import HotAccessories from "./HotAccessories";
import data from "../data/data.json";

const HotAccessoriesMenu = () => {
  const [Music, setMusic] = useState(true);
  const [Smart, setSmart] = useState(false);
  const [Home, setHome] = useState(false);
  const [Style, setStyle] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const styles = {
    MusicStyles: {
      textDecoration: Music && "none",
      color: Music && "orangered",
      borderBottom: Music && "1px solid orangered",
    },
    SmartStyles: {
      textDecoration: Smart && "none",
      color: Smart && "orangered",
      borderBottom: Smart && "1px solid orangered",
    },
    HomeStyles: {
      textDecoration: Home && "none",
      color: Home && "orangered",
      borderBottom: Home && "1px solid orangered",
    },
    StyleStyles: {
      textDecoration: Style && "none",
      color: Style && "orangered",
      borderBottom: Style && "1px solid orangered",
    },
    MobileStyles: {
      textDecoration: Mobile && "none",
      color: Mobile && "orangered",
      borderBottom: Mobile && "1px solid orangered",
    },
  };
  return (
    <>
      <div className="HotAccessoriesMenu-div1">
        <p
          className="HotAccessoriesMenuItem"
          onMouseEnter={() => {
            setMusic(true);
            setSmart(false);
            setHome(false);
            setStyle(false);
            setMobile(false);
          }}
          style={styles.MusicStyles}
        >
          Music Store
        </p>
        <p
          className="HotAccessoriesMenuItem"
          onMouseEnter={() => {
            setMusic(false);
            setSmart(true);
            setHome(false);
            setStyle(false);
            setMobile(false);
          }}
          style={styles.SmartStyles}
        >
          Smart Devices
        </p>
        <p
          className="HotAccessoriesMenuItem"
          onMouseEnter={() => {
            setMusic(false);
            setSmart(false);
            setHome(true);
            setStyle(false);
            setMobile(false);
          }}
          style={styles.HomeStyles}
        >
          Home
        </p>
        <p
          className="HotAccessoriesMenuItem"
          onMouseEnter={() => {
            setMusic(false);
            setSmart(false);
            setHome(false);
            setStyle(true);
            setMobile(false);
          }}
          style={styles.StyleStyles}
        >
          Lifestyle
        </p>
        <p
          className="HotAccessoriesMenuItem"
          onMouseEnter={() => {
            setMusic(false);
            setSmart(false);
            setHome(false);
            setStyle(false);
            setMobile(true);
          }}
          style={styles.MobileStyles}
        >
          Mobile Accessories
        </p>
      </div>
      <div className="HotAccessoriesMenu-div2">
        {Music && (
          <HotAccessories
            music={data.hotAccessories.music}
            musicCover={data.hotAccessoriesCover.music}
          />
        )}
        {Smart && (
          <HotAccessories
            smartDevice={data.hotAccessories.smartDevice}
            smartDeviceCover={data.hotAccessoriesCover.smartDevice}
          />
        )}
        {Home && (
          <HotAccessories
            home={data.hotAccessories.home}
            homeCover={data.hotAccessoriesCover.home}
          />
        )}
        {Style && (
          <HotAccessories
            lifeStyle={data.hotAccessories.lifeStyle}
            lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
          />
        )}
        {Mobile && (
          <HotAccessories
            mobileAccessories={data.hotAccessories.mobileAccessories}
            mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
          />
        )}
      </div>
    </>
  );
};

export default HotAccessoriesMenu;
