import React from 'react';
import images from '../../constants/images';

import { SubHeading } from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The key to Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Ex exercitation ex magna dolor proident do amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque quisquam sapiente magni voluptate labore ea reiciendis consectetur, quibusdam consequatur aliquid excepturi, alias saepe atque deleniti iure qui fugiat recusandae?</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
