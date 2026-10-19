import Scroll from "./Scroll";
import './styleScroll.css'
import { v4 as uuidv4} from 'uuid';
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.jpg";
import project7 from "../../assets/project7.jpg";
import project8 from "../../assets/project8.jpg";
import project9 from "../../assets/project9.jpg";
import finalProject from "../../assets/finalProject.jpg";

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  finalProject,
].map((image) => ({
  id: uuidv4(),
  image
}));

const IndexScroll = () => {
  return (
    <div className="App border-b border-t py-5 border-[#8DDFCB]">
      
      <Scroll images={images} speed={25000} />
    </div>
  );
}
export default IndexScroll;
