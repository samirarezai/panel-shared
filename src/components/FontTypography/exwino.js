import React from "react";

const ExwinoIcon = (props) => {
  const { icon, size = "md", classes = "", ...rest } = props;
  let sz = `size-ex-${size}`;
  let ic = `ex-${icon}`;
  return <i className={`exwino ${ic} ${sz} ${classes}`} {...rest}></i>;
};

export default ExwinoIcon;
