import React from 'react'
import bhagatSinghInfo from '../public/Data/Individual.jsx';
import bhagatSinghQuotes from './Bhagatquote.jsx';
import './bhagat.css'
const Bhagat = () => {
  return (
    <div className='main'>
      {bhagatSinghInfo.map((info, idx)=>
        idx ===4 ?(
          <div className='special' key={idx}>
            <div className='up'>
            <img src={info.image}/>
           
            <p>{info.summary}</p>
             </div>
             <div className='content'>
              <p>{info.content}</p>
             </div>
            
          </div>

        ) : (
        <div key={idx} className="wrap">
          <img src={info.image} alt={info.title} />
          <h1>{info.title}</h1>
          <p>{info.content}</p>

        </div>

      ))}
      <div className='side'>
        <div className='aside'>
          {bhagatSinghQuotes.map((q,i)=>( 
           <div key={i}>
           <h2>{ q.name}</h2>
           <p>{q.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bhagat