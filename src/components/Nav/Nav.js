import React, { useState } from 'react'


import navStyles from '../../styles/Nav/Nav.module.css'

import { BiBarChartSquare } from 'react-icons/bi'

import { FaBars} from 'react-icons/fa'

import { AiOutlineClose } from 'react-icons/ai'
 

 


function Nav() {

  const[laz,setlaz]=useState(true)
  const[laz2,setlaz2]=useState(true)


  function nav768() {
    
    setlaz(!laz)
 
  }


  return (
    <div>

        <div className={navStyles.main}>

                <div className={navStyles.firstDiv}>
                     
                    <a href="#more">More</a>
                    <a href="#buy">Buy</a>
                    <a href="#get">Get</a>
                    <a href="#crypto">Crypto</a>
                     <a href="#footer"><BiBarChartSquare /></a> 
                       
                    
                </div>

        </div>


  {  laz ?  <div className={navStyles.barsDiv}><FaBars  onClick={nav768} /></div>  
  : <div className={navStyles.barsDiv}> <AiOutlineClose   onClick={nav768}/> </div>    }


    { !laz  ?
      

                   <div className={navStyles.firstDiv768} id="firstDiv768">
                     
                    <a href="#more" onClick={nav768}>More</a>
                    <a href="#buy" onClick={nav768}>Buy</a>
                    <a href="#get" onClick={nav768}>Get</a>
                    <a href="#crypto" onClick={nav768}>Crypto</a>
                     <a href="#footer" onClick={nav768}><BiBarChartSquare /></a> 
                       
                    
                </div> 

            
      :""}



    </div>
  )
}

export default Nav