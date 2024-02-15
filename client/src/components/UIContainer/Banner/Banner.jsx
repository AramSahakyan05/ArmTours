import { bannerImages } from "../../../constants"
import './Banner.scss';

export const Banner = () => {
  return (
    <div 
      className="banner"
      style={{ background: `#121619 url(${bannerImages[Math.floor(Math.random() * 3)]}) no-repeat center / cover` }}
    >
      {/* <img src={bannerImages[Math.floor(Math.random() * 4) + 1]} alt="Page Banner" /> */}
    </div>
  ) 
}