import React from 'react'

import homeStyle from'../../styles/Home/Home.module.css'

function Home() {
  return (
    <div>
          <div className={homeStyle.container} id="home">
  

  
        <video 
       className={homeStyle.video}
       id='video'
        autoPlay={true}
       
            loop={true}
            muted
            controls={false}
            alt="Video by Pressmaster from Pexels"
       
            
            >
   

         <source  src={"https://media.giphy.com/media/CHk2VkrN4XDNSzIyLx/giphy.mp4"} />



</video>  





            <div className={homeStyle.firstDiv}>
              The biggest risk of all is not taking one
                         
           </div>




  

    </div>


    </div>
  )
}

export default Home