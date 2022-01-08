import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import useLockBodyScroll from "../Utils";

const LockBodyScrollProxy = (props) => {
  useLockBodyScroll();
  return <></>;
};

export default LockBodyScrollProxy;
