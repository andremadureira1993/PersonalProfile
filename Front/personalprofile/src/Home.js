import React, { useState, useEffect } from 'react'
import Myself from './images/andre.jpg';

function Home() {

  return (
    <section className='section'>
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
  )
}

export default Home
