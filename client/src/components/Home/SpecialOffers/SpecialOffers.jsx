import offer_picture from '../../../assets/home/offers/first-offer.jpg'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './SpecialOffers.scss';
import { Container } from '../../UIContainer/Container';

export const SpecialOffers = () => {
  return(
    <div className="special-offers">
      <Container>
        <div className="special-offers-headings">
          <h2 className="subheading">Don't Miss</h2>
          <h1 className="heading">Special Offers</h1>
        </div>
        <div className="offers">
          {/* First Offer */}
          <div className="first-offer">
            <img src={offer_picture} alt="First Offer"/>
            <div className="offer-info">
              <h2>
                Weekly<br />Flash Deals
              </h2>
              <h4>Up to 30% off</h4> 
              <a href="" className='first-offer-button'>
                View Details
                <HiOutlineArrowLongRight />
              </a>
            </div>
          </div>
          {/* Second Offer */}
          <div className="first-offer second-offer">
            <img src={offer_picture} alt="First Offer"/>
            <div className="offer-info">
              <h2>
                Summer<br />Escapes
              </h2>
              <h4>Play your next trip</h4>
              <a href="" className='second-offer-button'>
                Learn More
                <HiOutlineArrowLongRight />
              </a>
            </div>
          </div>
          {/* Third Offer */}
          <div className="first-offer third-offer">
            <img src={offer_picture} alt="First Offer"/>
            <div className="offer-info">
              <h2>
                Amazing<br />Tips
              </h2>
              <h4>Get to know our top tips</h4>
              <a href="" className='third-offer-button'>
                Read Blogs
                <HiOutlineArrowLongRight />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}