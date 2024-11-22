import React from 'react'

const scrollToSection = () => {
  const handleScroll = () => {
    const section3 = document.getElementById('section4');
    if (section3) {
      section3.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Scroll to Particular Section</h1>
        <button onClick={handleScroll}>Click to Scroll</button>
      </div>
      <div style={{ height: '500px', background: 'green', textAlign: 'center' }} id='section1'>
        <h2>Section 1</h2>
      </div>

      <div style={{ height: '500px', background: 'red', textAlign: 'center' }} id='section2'>
        <h2>Section 2</h2>
      </div>

      <div style={{ height: '500px', background: 'blue', textAlign: 'center' }} id='section3'>
        <h2>Section 3</h2>
      </div>

      <div style={{ height: '500px', background: 'purple', textAlign: 'center' }} id='section4'>
        <h2>Section 4</h2>
      </div>

    </div>
  )
};

export default scrollToSection;