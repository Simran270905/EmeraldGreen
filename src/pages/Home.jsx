 import Main from "../components/Main";
import Events from "../components/WeddingEvent";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import Couple from "../components/Couple";
import Story from "../components/Story";



const Home = () => {
  return (
    <>
      <Main/>
      <Story/>
      <Couple/>
      <Events />
      
      <Venue/>
      <Footer/>
    </>
  );
};


export default Home;