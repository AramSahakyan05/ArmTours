import tour_banner from '../../../assets/banner/tour-banner.png';

import './Banner.scss';

export const Banner = ({title}) => {
  return (
    <div className='banner'>
      <img src={tour_banner} alt="" />
      <h1>{title}</h1>
    </div>
  )
}