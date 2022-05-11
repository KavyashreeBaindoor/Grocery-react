import React, { useEffect } from "react";

const Alert = (props) => {
  const { type, mssg, removeAlert, list } = props;
  useEffect(
    function () {
      const timeOut = setTimeout(() => {
        removeAlert();
      }, 3000);
    },
    [list]
  );
  return (
    <React.Fragment>
      <p className={`alert alert-${type}`}>{mssg}</p>
    </React.Fragment>
  );
};

export default Alert;
