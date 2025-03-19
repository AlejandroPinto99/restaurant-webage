import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading
        title="Chef's Word"
      />
      <h1 className="headtext_cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque odio, perferendis illum sit fuga tempore quas eius dignissimos suscipit vitae nat</p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, incidunt quas neque, tempora perferendis sapiente delectus quos perspiciatis mollitia cumque dolorem autem laboriosam voluptatem exercitationem nobis vel amet. Qui, magni?
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
