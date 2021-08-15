import React from 'react';
import NavBarComponent from './NavBarComponent';
import HeroContentComponent from './HeroContentComponent';

 const HeroComponent=()=>{
    return (
      
        <div className="hero">
           <NavBarComponent/>
           <HeroContentComponent/>
        </div>
    )
}
export default HeroComponent;
