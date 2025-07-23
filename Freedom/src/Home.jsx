import React from 'react';
import fighters from './Data';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate()
     function navy(path){
      navigate(path)
    }
  return (
    <div className='main'
     
    >
     
      {fighters.map((fighter,idx) => (
       
        <div 
        onClick={()=>navy(fighter.route)}
        className='warper'
          key={fighter.id}
        >
          <img
            src={fighter.image}
            alt={fighter.name}
          />
          <h3>
            {fighter.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
