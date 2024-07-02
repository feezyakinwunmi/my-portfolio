// // import React from 'react';
// // import HeroSlider, {Slide} from 'hero-slider';
// // // import { Slide } from 'react-slideshow-image';
// // // import 'react-slideshow-image/dist/styles.css'

// // const img1 = 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';
// // const img2 = 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80';
// // const img3 = 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'

// // // const slideImages = [
// // //   {
// // //     const img1= 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
// // //   },
// // //   {
// // //     url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
// // //   },
// // //   {
// // //     url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
// // //   },
// // // ];
// // // const spanStyle = {
// // //   padding: '20px',
// // //   background: '#efefef',
// // //   color: '#000000'
// // // }
// // // const slidecontainer ={
// // // overflow: 'hidden',
// // // width: '100%',
// // // height: '350px',
// // // marginTop: '0',
// // // display: 'flex',
// // // flexDirection: 'row',
// // // border: '1px solid red',
// // // }
// // // const slideshowSlider ={
// // //     whiteSpace:'nowrap',
// // //   }
// // // const divStyle = {
// // //   display: 'inline-block',
// // //   width: '100%',
// // //   height: '300px',
// // //   border:'1px solid yellow',
// // // }


// // const Slideshow = () => {
// //     return (
// //     //     <div className="bigslidediv" style={ slidecontainer}> 
// //     //     <div className="slide" style={ slideshowSlider}>
// //     //        {slideImages.map((slideImage, index)=> (
// //     //           <div key={index}>
// //     //             <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
// //     //             </div>
// //     //           </div>
// //     //         ))} 
// //     //     </div></div>
// //     <HeroSlider
// //     slidingAnimation="left_to_right"
// //     orientation="horizontal"
// //     initialSlide={1}
// //     onBeforeChange={(previousSlide,nextSlide) => console.log("onBeforeChange",previousSlide,nextSlide)}
// //     onChange={nextSlide => console.log("onChange",nextSlide)}
// //     onAfterChange={nextSlide => console.log("onAfterChange",nextSlide)}
// //     style={{
// //         backgroundColor: 'red',
// //         height:'200px',
// //     }}
// //     settings={{
// //         slidingDuration:250,
// //         slidingDelay:100,
// //         shouldAutoplay:true,
// //         shouldDisplayButtons: true,
// //         autoPlayDuration:5000,
// //         height:'100vh',
// //         backgroundColor:'red',
// //     }}
// //     >
// //         <Slide
// //         background={{
// //             backgroundImage:img1, 
// //             backgroundAttachment:"fixed"
// //         }}
// //         />
// //          <Slide
// //         background={{
// //             backgroundImage:img2,
// //             backgroundAttachment:"fixed"
// //         }}
// //         />
// //          <Slide
// //         background={{
// //             backgroundImage:img3,
// //             backgroundAttachment:"fixed"
// //         }}
// //         />

// //     </HeroSlider>
       
// //       )
// // }
// // export default Slideshow;


// import { useState } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundColor: "Transparent",

// };

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
//   backgroundColor: "Transparent",

// };

// const sliderStyles = {
//   position: "relative",
//   height: "100%",
//   backgroundColor: "Transparent",

// };

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
//   backgroundColor: "Transparent",

// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
//   backgroundColor: "Transparent",
 
// };
// const slides = [
//     { url: "http://localhost:3000/image-1.jpg", title: "beach" },
//     { url: "http://localhost:3000/image-2.jpg", title: "boat" },
//     { url: "http://localhost:3000/image-3.jpg", title: "forest" },
//     { url: "http://localhost:3000/image-4.jpg", title: "city" },
//     { url: "http://localhost:3000/image-5.jpg", title: "italy" },
//   ];
// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <div style={sliderStyles}>
//       <div>
//         <div onClick={goToPrevious} style={leftArrowStyles}>
//           ❰
//         </div>
//         <div onClick={goToNext} style={rightArrowStyles}>
//           ❱
//         </div>
//       </div>
//       <div style={slideStylesWidthBackground}></div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;




import './slide.css';
import SlideImages from './slide';
import { useState } from 'react';
import React, { useEffect } from "react";


const Slideshow = () => {
    const [currentState, setCurrentState] = useState(0)
    useEffect(()=>{
    const timer = setTimeout(()=>{
  if (currentState === 2){
  setCurrentState(0);
  }else{
  setCurrentState(currentState + 1)}
  
    },16000)
    return ()=> clearTimeout(timer)
    
    },[currentState])
    const imgstyle ={
        backgroundImage: `url(${SlideImages[currentState].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        borderRadius: '20px',
        borderTopLeftRadius: '0px',
  
        
    }
  
    // const goToNext =(currentState) => {
    //   setCurrentState(currentState)
    // }
  
    return(
        <div className="container-style">
            <div style={imgstyle}></div>
            
            <div className="description">
              <div >
                <h1>{SlideImages[currentState].title}</h1>
                <h2>{SlideImages[currentState].phg}</h2>
              </div>
              <div className="carousel-boullt">
               

              </div>
            </div>
        </div>
    
    )
}
export default Slideshow;