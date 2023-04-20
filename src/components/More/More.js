import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaChartPie ,FaCalendarCheck ,FaMobile ,FaCheck } from 'react-icons/fa'



import moreStyle from '../../styles/More/More.module.css'

import slika from '../../images/home.png'
import apple from '../../images/apple.png'
import store from '../../images/store.png'
import Phone from '../Phone/Phone'







function More() {
  return (
    <div>
      
           
          <div className={moreStyle.container} id='more'>

          <div className={moreStyle.firstDiv}>
          Create your cryptocurrency portfolio today

          </div>



             <div className={moreStyle.textAndImage}>
                <div> <FaCheck  style={{marginRight:".5em",color:"#7474fd"}}/> Trusted by more than <span style={{color:"#7474fd"}}> 40M users</span> world-wide</div>

                <div> <FaCheck  style={{marginRight:".5em",color:"#7474fd"}} /> Leader in <span style={{color:"#7474fd"}}>security</span> certifications and Buying cripto</div>

                <div> <FaCheck  style={{marginRight:".5em",color:"#7474fd"}}/> The industry’s most comprehensive <span style={{color:"#7474fd"}}>insurance</span> coverage </div>

                <div className={moreStyle.textAndImage2Imge}><img src={apple} alt="app store" /> <img src={store} alt="google store" /> </div>

                

            </div>




          <div className={moreStyle.secondDiv}>
         
     
     <div className={moreStyle.imageDiv}>
          <img src={slika} alt="slika"  />

     </div>
          
       
          
            <div  className={moreStyle.secondDivText}>


             
          <div className={moreStyle.secondDivTextIcons}>
            
                  <FaChartPie className={moreStyle.icons} /> 
                    <div>
                   Buy and sell popular digital currencies,
                   keep track of them in the one place
                   </div>
         
              </div>

              <div className={moreStyle.secondDivTextIcons}>
                  <FaCalendarCheck  className={moreStyle.icons}/>   

                   Invest in cryptocurrency slowly over time by          
                   scheduling buys daily, weekly, or monthly
              </div>


              <div className={moreStyle.secondDivTextIcons}>

                   <FaMobile className={moreStyle.icons}/> 
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