import { bannerImages } from "../../../constants"
import './ProfileBanner.scss';

export const ProfileBanner = () => {
  return (
    <div 
      className="profile-banner"
      style={{ background: `#121619 url(${bannerImages[Math.floor(Math.random() * 3)]}) no-repeat center / cover` }}
    >
    </div>
  ) 
}