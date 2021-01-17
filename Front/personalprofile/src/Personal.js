import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import personal from './personal.json';

function Personal() {
  const [value, setValue] = useState(0);

  const nextItem = () => {
      const next = value + 1;
      if (next <= personal.length -1) {
          setValue(next);
      } else {
          setValue(0);
      }
  }

  const { title, text, item } = personal[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Life</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {personal.map((personalItem, index) => {
            return (
              <button
                key={personalItem.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {personalItem.item}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h4>{item}</h4>
          {text.map((item, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type='button' className='btn' onClick={nextItem}>
        <BsChevronDoubleDown />
      </button>
    </section>
  )
}

export default Personal
