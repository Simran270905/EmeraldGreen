 import Hero from "../components/Main";
import Events from "../components/WeddingEvent";
import RSVP from "../components/Rsvp";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import Couple from "../components/Couple";
import Story from "../components/Story";



const Home = () => {
  return (
    <>
      <Hero />
      <Story/>
      <Couple/>
      <Events />
      <RSVP />
      <Venue/>
      <Footer/>
    </>
  );
};


export default Home;