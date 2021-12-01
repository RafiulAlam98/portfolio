import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Skills from '../Skills/Skills';
import Contact from './../Contact/Contact';


const Home = () => {
     return (
          <div>
              <Banner></Banner> 
              <Skills></Skills>
              <Features></Features>
              <Contact></Contact>
          </div>
     );
};

export default Home;