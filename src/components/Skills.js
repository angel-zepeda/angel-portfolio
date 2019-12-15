import React from 'react';
import SkillIcon from './SkillIcon';

const Skills = () => {
  return (
    <div>
      <h1 style={{ borderLeft: '5px solid blue' }} className="pl-2 mt-5">
        <strong>Habilidades</strong>
      </h1>

      <div className="p-3">
        <div className="mx-auto row">
          <SkillIcon skill={"node"} starC={[1, 1, 1]} />
          <SkillIcon skill={"react"} starC={[1, 1, 1, 1]} />
          <SkillIcon skill={"express"} starC={[1, 1, 1, 1]} />
          <SkillIcon skill={"mongo"} starC={[1, 1, 1]} />
          <SkillIcon skill={"linux"} starC={[1, 1, 1, 1, 1]} />
          <SkillIcon skill={"ruby"} starC={[1, 1]} />
          <SkillIcon skill={"vim"} starC={[1, 1, 1, 1]} />
        </div>
        <h4 className="text-white bg-primary rounded p-2 col-md-5 mt-3">Enfoque actual: <span className="text-white">MERN Stack, Linux</span></h4>
      </div>


    </div>

  );
}

export default Skills;