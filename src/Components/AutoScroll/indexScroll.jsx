import Scroll from "./Scroll";
import './styleScroll.css'
import { v4 as uuidv4} from 'uuid';

const images = [
  "https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/6200b0dddcf32d3be937fa84/0x0.jpg?format=jpg&width=1200",
  "https://businessfacilities.com/wp-content/uploads/2017/10/BF-SO17_CovStory_1200x630_opt2.jpg",
  "https://thumbs.dreamstime.com/b/business-technology-internet-network-concept-young-businessman-shows-word-virtual-display-future-pricing-strategy-182521994.jpg",
  "https://www.homecareinsight.co.uk/2020/07/connected-technology.jpg",
  "https://www.yondu.com/wp-content/uploads/2022/08/OPT-2-medium-shot-man-wearing-vr-glasses-scaled.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtbFT50fetX0fpGDIl-TGaptbKNfLcyLRHftdl52MLzC-7wAaA7z_B8wa7WBwkgCj_3oI&usqp=CAU"
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