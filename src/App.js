import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import DarkMode from "./components/darkMode/DarkMode";

function App() {
  return (
    <>
      <Header />
      <DarkMode />
      <main className="main">
        <Home />
        <Skills />
        <Services />
        <Footer />
      </main>
    </>
  );
}

export default App;
