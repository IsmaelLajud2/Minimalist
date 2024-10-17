// import{useEffect, useRef} from 'react'
// import {gsap} from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import '../PerfomanceSection/PerfomanceStyles.css'

// gsap.registerPlugin(ScrollTrigger)


// const Cards = ({index,children}) => {

// const cardRef = useRef(null)
//     useEffect(() =>{
//         const card = cardRef.current
//         const cardHeight = card.offsetHeight;

//         gsap.set(card , {y : index * cardHeight})
//         gsap.to(card , {
//            y: 0,
//       duration: index * 0.5,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: card,
//         start: 'top top',
//         scrub: true,
     
//         invalidateOnRefresh: true, 
//     },
// });
// }, [index]);
//   return (
//     <div className='imagen-div' ref={cardRef}> 
//          {children}
//     </div>
//   )
// }

// export default Cards