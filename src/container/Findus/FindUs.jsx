import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}></h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sapiente possimus nobis maxime debitis voluptatibus animi qui ipsum minus eveniet, quam laborum explicabo libero quidem similique rem, deleniti error blanditiis.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 pm</p>
      </div>
      <button className="custom__button">View Info</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
