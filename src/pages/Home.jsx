 import Hero from "../components/Main";
import Events from "../components/WeddingEvent";
import RSVP from "../components/Rsvp";
import Venue from "../components/venue";
import Footer from "../components/footer";
import Couple from "../components/couple";
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