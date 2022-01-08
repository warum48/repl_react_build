import React, { useRef, useState, useEffect } from "react";

const Typograff = (props) => {
  const tp = useRef(null);
  tp.current = new Typograf({ locale: ["ru", "en-US"] });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: tp.current.execute(props.children) }}
    />
  );
};

export default Typograff;
