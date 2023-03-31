import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaChartPie ,FaCalendarCheck ,FaMobile } from 'react-icons/fa'



import moreStyle from '../../styles/More/More.module.css'

import slika from '../../images/home.png'







function More() {
  return (
    <div>
      
           
          <div className={moreStyle.container} id='more'>

          <div className={moreStyle.firstDiv}>
          Create your cryptocurrency portfolio today

          </div>



             <div className={moreStyle.emptyDiv}></div>






          <div className={moreStyle.secondDiv}>
         
     
      <div className={moreStyle.imageDiv}>
          <img src={slika} alt="slika"  />

     </div>
         
       
          
            <div  className={moreStyle.secondDivText}>


             
          <div className={moreStyle.secondDivTextIcons}>
            
                  <FaChartPie  /> 
                    <div>
                   Buy and sell popular digital currencies,
                   keep track of them in the one place
                   </div>
         
              </div>

              <div className={moreStyle.secondDivTextIcons}>
                  <FaCalendarCheck  />   

                   Invest in cryptocurrency slowly over time by          
                   scheduling buys daily, weekly, or monthly
              </div>


              <div className={moreStyle.secondDivTextIcons}>

                   <FaMobile /> 
                  Stay on top of the markets with your apps for 
                  Android or iOS.
              </div>
             
           

            </div>

          </div>
        
         
        </div>


           <div className={moreStyle.emptyDiv}>
          

           </div> 


                    

             
         
                

           




               <div className={moreStyle.threedDiv}>

                    <button  className={moreStyle.button} id='button'>Learn More  <AiOutlineArrowRight /> </button>
              </div>



              
   
        


    </div>
  )
}

export default More