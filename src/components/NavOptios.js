import React, { useState } from "react";
import "../styles/NavOptios.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NavCard from "./NavCard.js";

const NavOptios = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [IsmiPhone, setMiPhone] = useState(true);
  const [IsredmiPhone, setRedmiPhone] = useState(false);
  const [Istv, setTv] = useState(false);
  const [Islaptop, setLaptop] = useState(false);
  const [Isfitness, setFitness] = useState(false);
  const [Ishome, setHome] = useState(false);
  const [Isaudio, setAudio] = useState(false);
  const [Isaccessories, setAccessories] = useState(false);

  const styles = {
    miPhoneStyles: {
      textDecoration: IsmiPhone && "none",
      color: IsmiPhone && "orangered",
      borderBottom: IsmiPhone && "1px solid orangered",
    },
    redmiPhoneStyles: {
      textDecoration: IsredmiPhone && "none",
      color: IsredmiPhone && "orangered",
      borderBottom: IsredmiPhone && "1px solid orangered",
    },
    tvStyles: {
      textDecoration: Istv && "none",
      color: Istv && "orangered",
      borderBottom: Istv && "1px solid orangered",
    },
    laptopStyles: {
      textDecoration: Islaptop && "none",
      color: Islaptop && "orangered",
      borderBottom: Islaptop && "1px solid orangered",
    },
    fitnessStyles: {
      textDecoration: Isfitness && "none",
      color: Isfitness && "orangered",
      borderBottom: Isfitness && "1px solid orangered",
    },
    homeStyles: {
      textDecoration: Ishome && "none",
      color: Ishome && "orangered",
      borderBottom: Ishome && "1px solid orangered",
    },
    audioStyles: {
      textDecoration: Isaudio && "none",
      color: Isaudio && "orangered",
      borderBottom: Isaudio && "1px solid orangered",
    },
    accessoriesStyles: {
      textDecoration: Isaccessories && "none",
      color: Isaccessories && "orangered",
      borderBottom: Isaccessories && "1px solid orangered",
    },
  };
  return (
    <>
      <div className="postnavbar">
        <div className="postnavbar-logo">
          <img
            id="logoImage"
            src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            alt="Not"
          />
        </div>
        <p onMouseEnter={() => {
            setMiPhone(true);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(false);
            setFitness(false);
            setHome(false);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.miPhoneStyles}>Mi Phones</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(true);
            setTv(false);
            setLaptop(false);
            setFitness(false);
            setHome(false);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.redmiPhoneStyles}>Redmi Phones</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(true);
            setLaptop(false);
            setFitness(false);
            setHome(false);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.tvStyles}>TV</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(true);
            setFitness(false);
            setHome(false);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.laptopStyles}>Laptops</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(false);
            setFitness(true);
            setHome(false);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.fitnessStyles}>Fitness &amp; Lifestyle</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(false);
            setFitness(false);
            setHome(true);
            setAudio(false);
            setAccessories(false);
          }}
          style={styles.homeStyles}>Home</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(false);
            setFitness(false);
            setHome(false);
            setAudio(true);
            setAccessories(false);
          }}
          style={styles.audioStyles}>Radio</p>
        <p onMouseEnter={() => {
            setMiPhone(false);
            setRedmiPhone(false);
            setTv(false);
            setLaptop(false);
            setFitness(false);
            setHome(false);
            setAudio(false);
            setAccessories(true);
          }}
          style={styles.accessoriesStyles}>Accessories</p>
        <div className="postnavbar-input">
          <input type="text" placeholder="Search Products" />
          <SearchOutlinedIcon style={{ color: "rgb(61, 61, 61)" }} />
        </div>
      </div>
      <div className="navOptions">
        {IsmiPhone
          ? miPhones.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {IsredmiPhone
          ? redmiPhones.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Istv
          ? tv.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Islaptop
          ? laptop.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Isfitness
          ? fitnessAndLifeStyle.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Ishome
          ? home.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Isaudio
          ? audio.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}

        {Isaccessories
          ? accessories.map((item) => (
              <NavCard
                name={item.name}
                price={item.price}
                image={item.image}
                key={item.image}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default NavOptios;
