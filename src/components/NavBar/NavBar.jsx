import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Linkto, NavContainer } from "./NavBar.styled";
import debounce from "lodash/debounce";

const NavBar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true); // Por defecto muestra la barra de navegación

  useEffect(() => {
    const handleScroll = debounce(() => {
      // Usa debounce para limitar la frecuencia de ejecución de la función
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // console.log("ocultando modal");
        setShowNav(false);
      } else {
        //console.log("mostrando modal");
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    }, 200); // Tiempo de espera del debounce

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpia el event listener cuando el componente se desmonta
    };
  }, [lastScrollY]);
  return (
    <NavContainer className={`${showNav ? "visible" : "hidden"}`}>
      <Linkto href="#hero">Home</Linkto>

      <Linkto href="#skills">Skills</Linkto>
      <Linkto href="#projects">Experience</Linkto>
      <Linkto href="#contact">Contact</Linkto>
    </NavContainer>
  );
};
export default NavBar;
