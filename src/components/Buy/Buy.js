import React from 'react'


import buyStyle from '../../styles/Buy/Buy.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios';
import { useEffect,useState } from 'react';



 function Buy() {
const [ime,setIme]=useState()
const [symbol,setSymbol]=useState()
const [img,setImg]=useState()
const[price,setPrice]=useState()
const [procent,setProcent]=useState()
const [wage,setWage]=useState()


const [ime2,setIme2]=useState()
const [symbol2,setSymbol2]=useState()
const [img2,setImg2]=useState()
const[price2,setPrice2]=useState()
const [procent2,setProcent2]=useState()
const [wage2,setWage2]=useState()


const [ime3,setIme3]=useState()
const [symbol3,setSymbol3]=useState()
const [img3,setImg3]=useState()
const[price3,setPrice3]=useState()
const [procent3,setProcent3]=useState()
const [wage3,setWage3]=useState()


const [ime4,setIme4]=useState()
const [symbol4,setSymbol4]=useState()
const [img4,setImg4]=useState()
const[price4,setPrice4]=useState()
const [procent4,setProcent4]=useState()
const [wage4,setWage4]=useState()


const [ime5,setIme5]=useState()
const [symbol5,setSymbol5]=useState()
const [img5,setImg5]=useState()
const[price5,setPrice5]=useState()
const [procent5,setProcent5]=useState()
const [wage5,setWage5]=useState()


 useEffect( () =>  {

  async function fetchData() {

    try{
       const res = await  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
     

setIme(res.data[0].name)
setSymbol(res.data[0].symbol)
setImg(res.data[0].image)
setPrice(res.data[0].current_price)
setProcent(res.data[0].price_change_percentage_24h)
setWage(res.data[0].market_cap)


setIme2(res.data[1].name)
setSymbol2(res.data[1].symbol)
setImg2(res.data[1].image)
setPrice2(res.data[1].current_price)
setProcent2(res.data[1].price_change_percentage_24h)
setWage2(res.data[1].market_cap)



setIme3(res.data[2].name)
setSymbol3(res.data[2].symbol)
setImg3(res.data[2].image)
setPrice3(res.data[2].current_price)
setProcent3(res.data[2].price_change_percentage_24h)
setWage3(res.data[2].market_cap)



setIme4(res.data[3].name)
setSymbol4(res.data[3].symbol)
setImg4(res.data[3].image)
setPrice4(res.data[3].current_price)
setProcent4(res.data[3].price_change_percentage_24h)
setWage4(res.data[3].market_cap)


setIme5(res.data[4].name)
setSymbol5(res.data[4].symbol)
setImg5(res.data[4].image)
setPrice5(res.data[4].current_price)
setProcent5(res.data[4].price_change_percentage_24h)
setWage5(res.data[4].market_cap)






    }catch(err){
      console.log(err);
    }
   
  }
  fetchData();
}

  
  ,[]);
 


    return (
        <div className={buyStyle.container} id='buy'>

<div className={buyStyle.firstDiv}>
             Buy crypto at true cost

          </div>
          <div className={buyStyle.secondDiv}>
         <div> Enjoy up to 8% back on all spending with your sleek,</div>
               <div>pure metal card.</div>
           <div>No annual fees. Top-up with fiat or crypto.</div>  

          </div>


                 <div className={buyStyle.emptyDiv}></div>


           <div className={buyStyle.threedDiv}>

               <div className={buyStyle.threedDivItems}>
                    <div>{ime} {symbol}<img src={img} height={15} alt="bitcoin"/></div>
                    <div>{price+' $'}</div> 
                    <div style={{color:"firebrick"}}>{ procent+' %'}</div> 
                    <div> {wage +' $'}</div> 
                    <button>Trade</button>


              </div>


                 <div className={buyStyle.threedDivItems}>
                    <div>{ime2} {symbol2}<img src={img2} height={15} alt="bitcoin"/></div>
                    <div>{price2+' $'}</div> 
                    <div style={{color:"firebrick"}}>{ procent2+' %'}</div> 
                    <div> {wage2 +' $'}</div> 
                    <button>Trade</button>


              </div>




              
                 <div className={buyStyle.threedDivItems}>
                    <div>{ime3} {symbol3}<img src={img3} height={15} alt="bitcoin"/></div>
                    <div>{price3+' $'}</div> 
                    <div style={{color:"firebrick"}}>{ procent3+' %'}</div> 
                    <div> {wage3+' $'}</div> 
                    <button>Trade</button>


              </div>




                        
                 <div className={buyStyle.threedDivItems}>
                    <div>{ime4} {symbol4}<img src={img4} height={15} alt="bitcoin"/></div>
                    <div>{price4+' $'}</div> 
                    <div style={{color:"firebrick"}}>{ procent4+' %'}</div> 
                    <div> {wage4+' $'}</div> 
                    <button>Trade</button>


              </div>



                        
                 <div className={buyStyle.threedDivItems}>
                    <div>{ime5} {symbol5}<img src={img5} height={15} alt="bitcoin"/></div>
                    <div>{price5+' $'}</div> 
                    <div style={{color:"firebrick"}}>{ procent5+' %'}</div> 
                    <div> {wage5+' $'}</div> 
                    <button>Trade</button>


              </div>



           </div>



           
                 <div className={buyStyle.emptyDiv}></div>


       
         
        
         <button  className={buyStyle.button} id='button'>Buy now <AiOutlineArrowRight /> </button>


       
            
        </div>
    )
}




export default  Buy;