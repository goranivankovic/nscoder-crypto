import React from 'react'


import { AiOutlineArrowRight } from 'react-icons/ai'


import getStyles from '../../styles/Get/Get.module.css'

import slika from '../../images/3.png'



function transform90(a){
    a.target.style.transform='scale(0.9)'
    a.target.style.transition='1200ms'
  }
  function transform100(b){
    b.target.style.transform='scale(1)'
    b.target.style.transition='500ms'
  }


function Get() {
  return (
    <div>

          <div className={getStyles.container} id="get" >

    <div className={getStyles.fristDiv} 
           onMouseOver={transform90}
           onMouseLeave={transform100}
    >
    Get started in few moments
    
              </div>
    
              <div className={getStyles.secondDiv}
                     onMouseOver={transform90}
                     onMouseLeave={transform100}
              >
              Cripto supports a variety of the most popular digital currencies.
             
              </div>


              {/* <div className={getStyles.empdtyDiv}></div> */}
           
    
              <div   className={getStyles.treedDiv}
             
            
                 onMouseOver={transform90}
                 onMouseLeave={transform100}
    
               >
                <img src={slika} alt='slika' />
             
    
                </div>
    
    
    
    
    
              
     <button className={getStyles.button} id='button'>Contact us <AiOutlineArrowRight /> </button>
    
    
             
    
    
            
    
              <div className={getStyles.fourDiv}>
                  <div className={getStyles.threeDivs}
                 onMouseOver={transform90}
                 onMouseLeave={transform100}
                  >
                   
                   <div >
                       {'$327B'}
                   </div>
                   <div>
                   Quarterly volume
                   </div>
    
                  </div>
                  <div className={getStyles.threeDivs}
                     onMouseOver={transform90}
                     onMouseLeave={transform100}
                  >
                      <div>{'100+'}</div>
                      <div>
                      Countries supported
                      </div>
    
                  </div>
                  <div className={getStyles.threeDivs}
                     onMouseOver={transform90}
                     onMouseLeave={transform100}
                  >
                      <div >{'73+M'}</div>
                      <div>
                      Verified users
                      </div>
           
                  </div>
    
              </div>
              
          
    
     
    
    
    
      
    
    
    
    
    
    
        </div>
     
    </div>
  )
}

export default Get