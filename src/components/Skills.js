import React from 'react';
import SkillIcon from './SkillIcon';

const Skills = () => {
  return (
    <div className="mt-4">
      <h1>
        <strong className="card col-md-2">Habilidades</strong>
      </h1>

      <div className="col-md-7 mx-auto">
        <div className="row">
          <SkillIcon skill={"node"} starC={[1, 1, 1]} />
          <SkillIcon skill={"react"} starC={[1, 1, 1, 1]} />
          <SkillIcon skill={"express"} starC={[1, 1, 1, 1]} />
          <SkillIcon skill={"mongo"} starC={[1, 1, 1]} />
          <SkillIcon skill={"linux"} starC={[1, 1, 1, 1, 1]} />
          <SkillIcon skill={"ruby"} starC={[1, 1]} />
          <SkillIcon skill={"vim"} starC={[1, 1, 1, 1]} />
        </div>

      </div>
      <hr />
    </div>

  );
}

export default Skills;