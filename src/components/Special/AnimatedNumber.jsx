import {useState,useEffect,useRef} from 'react'
import '../Special/SpecialStyles.css'

const AnimatedNumber = () => {
 
    const [number, setNumber] = useState(0) 
    const [isVisible,setIsVisible]=useState(false)
    const [secondNumber, setSecondNumber] = useState(0)

    const numberRef=useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver((entries) =>{
        const entry = entries[0]
        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }

      },{threshold:0.5})


      if (numberRef.current) {
        observer.observe(numberRef.current)
      }
      return () => {
        if (number.current) {
            observer.unobserve(numberRef.current)
        }
       }
   
    }, [])
    


    useEffect(() => {
   let interval; 
   
   if (isVisible) {
    setNumber(0)

    interval = setInterval(() =>{
        setNumber((prevNumber)=>{
            if (prevNumber < 22) {
                return prevNumber + 1
            }
            else {
                clearInterval(interval)
                return prevNumber
            }
        })
    },80)
   }
   return ()=> clearInterval(interval)
 
    }, [isVisible])
    
  useEffect(() => {
    let number9Interval

    if (isVisible) {
        setSecondNumber(0)
        number9Interval =setInterval(() =>{
            setSecondNumber((prevNumber) =>{
                if (prevNumber < 9) {
                    return prevNumber + 1
                }
                else{
                    clearInterval(number9Interval)
                    return prevNumber
                }
            })
        }, 100)
    }
    return () => clearInterval(number9Interval)
  }, [isVisible])
    
  return (
    <div ref={numberRef}><span>{number}.{secondNumber}%</span></div>
  )
}

export default AnimatedNumber