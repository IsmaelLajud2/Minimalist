import { useRef } from 'react';
import '../AtomSection/AtomSectionStyles.css';
import { motion, useInView } from 'framer-motion';

const AtomSection = () => {
  const ref = useRef(null);
  const titleRef = useRef(null);

  
  const transitionBorder = { duration: 0.6, ease: [0.4, 0, 0.2, 1] };
  const transitionTextList = { delay: 1, duration: 1.4, ease: [0.4, 0, 0.2, 1] };
  const transitionTitle = { duration: 2, ease: [0.4, 0, 0.2, 1] };

 
  const initialBorder = { borderBottom: "0px solid #dddcdc", width: 0 };
  const animateBorder = { borderBottom: "1px solid #dddcdc", width: "" };
  const initialText = { opacity: 0, y: 100 };
  const animateText = { opacity: 1, y: 0 };

  const titleisInView = useInView(titleRef, { once: true });
  const isInView = useInView(ref, { once: true });

 
  const ingredients = ["Aminoácidos", "Aceite de argán", "Transglutaminasa", "Aceite maleico"];
  const formulas = ["[C4H4O4]", "[C27H44O3H2O]", "[H2NCHRCOOH]", "[C18H34O2]"];
  const functions = [
    "Reparación de cabello dañado",
    "Adhesivo fortalecedor del cabello",
    "Protege el cabello",
    "Promueve la salud del cabello"
  ];

  const renderList = (items, transition, ref = null) => (
    <motion.ul className="list-item-container" ref={ref}>
      <motion.span
        initial={initialBorder}
        animate={isInView ? animateBorder : {}}
        transition={transition}
        className='title-list'
      >
        {items.title}
      </motion.span>
      {items.content.map((item, index) => (
        <motion.li
          key={index}
          initial={initialBorder}
          animate={isInView ? animateBorder : {}}
          transition={transition}
          className="info-item"
        >
          <motion.span ref={ref} initial={initialText} animate={isInView ? animateText : initialText} transition={transitionTextList}>
            {item}
          </motion.span>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <section className='atom-section-container'>
      <motion.div
        className='text-div'
        initial={{ opacity: 0, y: 100 }}
        animate={titleisInView ? { opacity: 1, y: 0 } : {}}
        transition={transitionTitle}
        ref={titleRef}
      >
        <p className='p-atom'>¿Qué hay dentro?</p>
      </motion.div>

      <motion.div ref={titleRef} className='imagen-atom-container' initial={{ opacity: 0, y: 100 }} animate={titleisInView ? { opacity: 1, y: 0 } : {}} transition={transitionTitle} >
        <motion.img className='atom' src='Images/Atomo/Atomo.webp' alt='atomo-imagen' />
      </motion.div>

      <div className='info-container'>
        {renderList({ title: "Ingredientes", content: ingredients }, { ...transitionBorder, delay: 0.3 }, ref)}
        {renderList({ title: "Fórmula", content: formulas }, { ...transitionBorder, delay: 0.3 }, ref)}
        {renderList({ title: "Función", content: functions }, { ...transitionBorder, delay: 0.3 }, ref)}
      </div>
    </section>
  );
};

export default AtomSection;
