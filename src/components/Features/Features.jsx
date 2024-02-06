import {Container} from '../UIContainer/Container';
import { IoCubeOutline } from "react-icons/io5";
import "./Features.scss";

export const Features = () => {
  return (
    <section className='features__section'>
      <Container>
        <div className="features__section__heading">
          <h4>Features</h4>
          <h1>Discover Armenia's Touring Activities</h1>
        </div>
        <div className="features">
          <div className="col1">
            <div className="cube"><IoCubeOutline /></div>
            <div className="feature-info">
              <h3>Comprehensive Tour Information</h3>
              <p>Get detailed information about all touring activities in Armenia</p>
            </div>
          </div>
          <div className="col1 col2">
            <div className="cube"><IoCubeOutline /></div>
            <div className="feature-info">
              <h3>Interactive Maps</h3>
              <p>Explore the attractions and plan your itinerary with interactive maps</p>
            </div>
          </div>
          <div className="col1">
            <div className="cube"><IoCubeOutline /></div>
            <div className="feature-info">
              <h3>User Reviews and Ratings</h3>
              <p>Read authentic user reviews and ratings to make informed decisions</p>
            </div>
          </div>
          <div className="col1 col2">
            <div className="cube"><IoCubeOutline /></div>
            <div className="feature-info">
              <h3>Booking Convenience</h3>
              <p>Easily book your preferred tours and activities online</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
    )
}