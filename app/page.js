'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Education from "./components/Education";

export default function Home() {

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  
      useEffect(() => {
          document.documentElement.setAttribute(
              "data-theme",
              dark ? "dark" : "light"
          );
          localStorage.setItem("theme", dark ? "dark" : "light");
      }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark}/>
      <Header dark={dark}/>
      <About dark={dark}/>
      {/* <Services /> */}
      <Education />
      <Work dark={dark}/>
      <Contact />
      <Footer dark={dark}/>
    </>
  );
}
