import React from 'react'
import Myself from './images/andre.jpg';
import { FiDownload } from 'react-icons/fi';
import pdf from './files/AndreMssMoraes_Resume.pdf';

export default function Home() {

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
        <button type='button' className='btn-cv' onClick={() =>  window.open(pdf, "_blank")}>
          download my cv <FiDownload />
        </button>
      </div>
    </section>
  )
}