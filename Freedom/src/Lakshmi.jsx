import React from 'react'
import raniLakshmiQuotes from '../public/Data/lakshmiq.jsx'
import raniLakshmiBaiInfo from '../public/Data/lakshmi.jsx'
import './bhagat.css'
const Lakshmi = () => {
  return (
    <div className='main'>
      {raniLakshmiBaiInfo.map((info, idx)=>
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
          {raniLakshmiQuotes.map((q,i)=>( 
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

export default Lakshmi;