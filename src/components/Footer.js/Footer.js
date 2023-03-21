import React from 'react'
import footerStyle from '../../styles/Footer/Footer.module.css'
import { AiOutlineFacebook,AiOutlineYoutube ,AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitter  } from 'react-icons/fa'

function Footer() {
  return (
    <div className={footerStyle.main} id='footer'>
        <div className={footerStyle.empty}></div>



        <div className={footerStyle.firstDiv}>

      <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>APP</div>

          <div>Buy and Sell</div>
          <div>Crypto/Earn</div>
          <div>Crypto/Credit</div>
         <div>Crypto.com</div>
          <div>Carers</div> 

      </div>

      <div className={footerStyle.firstDiv_first_row}>

      <div className={footerStyle.firstDiv_first_row_headline }>EXCANGE</div>

         <div>Exchange</div>
         <div>Margin/Trading</div>
        <div>Deliver/Trading</div>
       <div>Swap</div>
        <div>The Syndicate</div> 
          
          </div>

          <div className={footerStyle.firstDiv_first_row}>
          <div className={footerStyle.firstDiv_first_row_headline }>BLOCKCHAIN</div>

          <div>Crypto Chain</div>
         <div>Chain/Explorer</div>
        <div>Walet/widgets </div>
        <div>Swap Blog</div>
        <div>Prices tax</div> 

          
          </div>

          <div className={footerStyle.firstDiv_first_row_icons_hw}>

             
              <a  href="https://www.facebook.com/" target="_blank"><AiOutlineFacebook className={footerStyle.firstDiv_first_row_icons} /></a>  
              <a  href="https://youtube.com"  target="_blank"><AiOutlineYoutube  className={footerStyle.firstDiv_first_row_icons}/></a>  
               <a href="https://twitter.com"  target="_blank"><FaTwitter className={footerStyle.firstDiv_first_row_icons} /></a> 
               <a  href="https://instagram.com"  target="_blank"><AiOutlineInstagram className={footerStyle.firstDiv_first_row_icons} /></a> 
               

          
              
             
          
          </div>
    


        </div>


        <div className={footerStyle.secondDiv}>
            <div>© THE CRYPTO</div>
            <div>2022TERMS & CONDITION</div>
            <div>SPRIVACY POLICYCOOKIE POLICY</div>


        </div>


       <div className={footerStyle.empty}></div>
    </div>
  )
}

export default Footer