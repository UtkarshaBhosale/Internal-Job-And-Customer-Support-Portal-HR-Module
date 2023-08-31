import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import 'C:/Users/Admin/Desktop/utkarsha-bhosale/internal-job-customer-support-portal-ui/internal-job-customer-support/src/Components/Carousel.css';
const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="banner04.jpg" alt="Image 1" />
        <div className="carousel-overlay">
          <h2>Welcome to Axis Job Portal</h2>
          <p>Find your dream job today!</p>
        </div>
      </div>
      <div>
        <img src="img2.jpg" alt="Image 2" />
        <div className="carousel-overlay">
          <h2>Accelerate your career growth with our tailored development plans.</h2>
          <p>Unlock new opportunities and advancement pathways in your career</p>
          <button className='btn'>Explore More Opportunities</button>
        </div>
      </div>
     

    
    </Carousel>
  );
};

export default CarouselComponent;
