import React from 'react';
import Body from './Body';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// window.addEventListener('scroll', () => {
//   const section1 = document.getElementById('1');
//   const section2 = document.getElementById('2');
//   const section3 = document.getElementById('3');

//   if (window.scrollY < section2.offsetTop) {
//     // show first section
//     section1.style.display = 'block';
//     section2.style.display = 'none';
//     section3.style.display = 'none';
//   } else if (window.scrollY < section3.offsetTop) {
//     // show second section
//     section1.style.display = 'none';
//     section2.style.display = 'block';
//     section3.style.display = 'none';
//   } else {
//     // show third section
//     section1.style.display = 'none';
//     section2.style.display = 'none';
//     section3.style.display = 'block';
//   }
// });


const App = () => {
  return (
    <div>
    <Header></Header>
    <About></About>
    <Body></Body>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App