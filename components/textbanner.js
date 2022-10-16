import React from 'react';

const TextBannerComponents = (props) => {
  const staticVariable = 'this is a static text';

  return () => (
    <div>
      <span>
        <h2>Rendering static value from inner variable</h2>
        <p>{staticVariable}</p>
      </span>
      <span className="pt-2">
        <h2>Rendering props value from inner variable</h2>
        <p>{props.content}</p>
      </span>
    </div>
  );
};
export default TextBannerComponents;
