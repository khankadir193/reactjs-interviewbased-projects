import React, { useEffect,useState } from 'react'

const ScrollToSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   window.addEventListener('scroll',handleScrolls); 

   return () => {
    window.removeEventListener('scroll',handleScrolls);
   };
  },[]);

  const handleScrolls = () => {
    if(window.scrollY > 200){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  const handleScroll = () => {
    const section3 = document.getElementById('section3');
    if (section3) {
      section3.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
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

export default ScrollToSection;