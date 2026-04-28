'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Education from "./components/Education";

export default function Home() {
  const [dark, setDark] = useState(false);

  // ✅ Run only on client
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
    }
  }, []);

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
      <Education />
      <Work dark={dark}/>
      <Contact />
      <Footer dark={dark}/>
    </>
  );
}