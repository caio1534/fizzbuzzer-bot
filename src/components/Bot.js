import React, { useState, useEffect } from "react"
import { Form } from 'react-bootstrap'
import Icon from './Icon'

function Bot() {

  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    fizzbuzz(inputNumber)
  }, [inputNumber])

  const handleOnChange = e => {
    if (e.target.value) { setInputNumber(e.target.value) }
    else { setInputNumber(''); setResult(''); setVisibility(false)}
  }

  const fizzbuzz = (i) => {
    if (isNaN(i)) {
      //just a couple easter eggs
      if (i === 'pi') setResult('Smartass... Try another one 🙃')
      else if (i === 'e') setResult('Was that a mathematical constant? 🤓')
      else setResult('I said numbers... 🙄')
    }
    else if (i == 0) { setResult('Not FizzBuzz 😅') }
    else if (i % 1 !== 0) { setResult('Integers only. Try a whole number instead 😶') }
    else if (i % 3 === 0 && i % 5 === 0) { setResult('FizzBuzz 🔥') }
    else if (i % 3 === 0) { setResult('Fizz ⚡') }
    else if (i % 5 === 0) { setResult('Buzz 🚀') }
    else { setResult('Not FizzBuzz 😅') }
    
    if (inputNumber.length > 0) { setVisibility(true) }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-sm mt-4 mb-3 mx-8">
            <Icon size='boxIcon' />
            <h1 className='mb-1'>Tell me a number!</h1>
            <p className='smallerP'>C'mon don't be shy 😄</p>
            <div className='mb-10'>
              <Form.Group className='my-10'>
                <Form.Control value={inputNumber} onChange={handleOnChange} size="lg" type="text" placeholder="Type in any number" />
              </Form.Group>
              <div className={visibility ? 'visible' : 'invisible'}>
                <h4 className="font-weight-bold mt-2 mb-0">
                  {result}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bot;