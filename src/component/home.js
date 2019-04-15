import React from 'react';
import './style/home.css'

// import background from '../image/movie'

// const bgStyle = {
//   height: "100%",
//   backgroundImage: `url(${background})`
// };

const Home = (props) =>{
  return (
    <>

      <div className="homepage-wrapper" style={{height: '90vh'}}>
      {/* <div style={bgStyle}> */}
        <div className="welcome">Welcome to Yun's Movie App!!</div>
      </div>
      {/* </div> */}
    
    </>
  )
}

export default Home