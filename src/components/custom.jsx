import React from 'react';

  export const ImageBackground = ({ imageUrl, style, children }) => {
    return (
      <div
        style={{
          ...style,
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {children}
      </div>
    );
  }