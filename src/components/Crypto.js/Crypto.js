import React from 'react'

import { FaChartPie ,FaCalendarCheck ,FaMobile } from 'react-icons/fa'
import { AiOutlineArrowRight ,AiOutlineCheck } from 'react-icons/ai'
import cryptoStyle from '../../styles/Cripto/Crypto.module.css'


import slika from '../../images/mobile.png'

function Crypto() {
  return (
    <div>
        <div className={cryptoStyle.container}  id='crypto'>





<div className={cryptoStyle.firstDiv}>
        The World s Crypto App

          </div>

          <div className={cryptoStyle.secondDiv} >
             <div >
              <AiOutlineCheck />
               Join 10m+ users buying and selling 250+ cryptocurrency at true cost
               </div> 

                <div >
                  <AiOutlineCheck />
                    Spend with Cripto and Visa Card and get up to 8% back    
              </div>  
 

          </div>


          <div className={cryptoStyle.emptyDiv}></div>



          <div className={cryptoStyle.threedDiv}>

              <div className={cryptoStyle.threedDivitems}>
                      <div className={cryptoStyle.threedDivitemsHeadline}> DeFiMadeSImple</div>
                  
               <div className={cryptoStyle.threedDivitemsText}>
                  DeFi Wallet.Your Keys,
                  Your Crypto.
                  Defi Earn .No lock-up
                  period abd stable returns.
                  Defi Swap.Swap defi
                  coins and earn Triple Yield


              </div>

              <button  className={cryptoStyle.button}>Crypto <AiOutlineArrowRight /> </button>
           
            </div>



            <div   className={cryptoStyle.imageDiv}>

              <img src={slika} alt='slika' />
          

            </div>


          </div>



            <div className={cryptoStyle.emptyDiv}></div>



          
      
  
         <div className={cryptoStyle.fourDiv}>
                 Deposit crypto, earn rewards

         </div>


              <div className={cryptoStyle.fiveDiv}>

                       <div>
                                 Trade with confidence on world s fastest
                        </div>
                         <div>
                             and most secure crypto exchange
                        </div>
                

            </div>
  
 
</div>



</div>
  )
}

export default Crypto