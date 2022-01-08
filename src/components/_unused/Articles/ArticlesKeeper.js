import React from "react";
import UserA from "./userA";
import UserB from "./userB";

const components = {
  usera: UserA,
  userb: UserB
};

function DynamicComponent(props) {
  const SelectUser = components[props.user];
  return <SelectUser />;
}

export default DynamicComponent;