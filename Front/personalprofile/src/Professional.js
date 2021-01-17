import React from 'react';
import Myself from './images/andre.jpg';
import { useGlobalContext } from './context';

const Professional = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <aside className='info-menu'>
            asdasd
        </aside>
        <article className='hero-info'>
          <p>
            This is my online resume. I hope you can have a great experience!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Professional;
