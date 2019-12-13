import React from 'react';
import star from '../assets/icons/star.png';

const SkillIcon = ({ skill, starC }) => {
  return (
    <div>
      <img src={require("../assets/icons/" + skill + ".png")} alt="Node JS" width="64px" height="64px" className="m-4" />
      <div className="row mx-auto pl-3">
        {
          starC.map(s => (
            <span><img src={star} alt="Node JS" width="16px" height="16px" /></span>
          ))
        }
      </div>
    </div>
  );
}

export default SkillIcon;