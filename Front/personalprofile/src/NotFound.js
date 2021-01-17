import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";

function NotFound() {

  return (
    <section className='section'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            404 - Not Found
          </h1>
          <p>
            Sorry, I couldn't found the page you'r looking for. But I got the logs and I'll take check it.
          </p>
        </article>
      </div>
    </section>
  )
}

export default NotFound
