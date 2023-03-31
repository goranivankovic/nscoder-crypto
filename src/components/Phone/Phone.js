import React from 'react'

import mobile2 from '../../images/mobile2.png'
import mobile3 from '../../images/mobile3.png'

import phoneStyles from '../../styles/Phone/Phone.module.css'

function Phone() {
  return (
    <div>

                <div className={phoneStyles.secondDivPhone}>
                         
                             <img  src={mobile2} alt="" /> 
                              <img  src={mobile3} alt="" /> 
                           
                    </div>

    </div>
  )
}

export default Phone