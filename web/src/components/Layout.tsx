import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <div style={{ width: "400px" }}>{children}</div>
    </div>
  );
};

export default Layout;
