import React from 'react';
import Myself from './images/andre.jpg';
import { useGlobalContext } from './context';

const Home = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <img src={Myself} alt='' className='person-img' />
          <h1>
            Welcome
          </h1>
          <p>
            This is my online resume. I hope you can have a great experience!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
