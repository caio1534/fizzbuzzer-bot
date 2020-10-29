import React from "react"
import CaioPic from '../caio_pic2.jpg'

function About() {
  const redirect = () => {
    window.open('https://www.caiocristo.com', '_blank')
    return null;
  }

  return (
    <div class="App container">
      <div class="row">
        <div class="col-sm mt-3 mb-3">
          <h4 className='m-auto'>"Who's this amazingly talented young man behind FizzBuzzer Bot?" you might ask...</h4>
          <p className='smallerP mt-3 mb-4'>Click the image below to find out 😌</p>
          <a onClick={redirect}><img src={CaioPic} alt='mistery man' className='rounded-circle caioImg m-auto mb-3' /></a>
        </div>
      </div>
    </div>
  );
}

export default About;