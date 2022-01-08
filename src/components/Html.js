import React, { useRef, useState, useEffect } from "react";

const Html = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.children }} className={props?.className}/>;
};

export default Html;
