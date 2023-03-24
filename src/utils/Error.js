import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1 style={{ marginLeft: 98 }}>Opps😑</h1>
      <h1>Something went wrong ❗❗</h1>
      <p style={{ marginLeft: 150, fontSize: 20 }}>{err.status} not found</p>
    </div>
  );
};

export default Error;
