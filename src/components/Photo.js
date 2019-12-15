import React from 'react';
const Photo = () => {
  return (
    <div className="text-center mt-4">
      <span>
        <img
          alt="Angel Zepeda"
          className="p-1"
          src={require('../assets/imgs/me.jpeg')} width="240px" height="240px"
          style={{
            borderRadius: "50%",
            border: "3px solid gray"
          }}
        />
      </span>
    </div>
  );
}

export default Photo;