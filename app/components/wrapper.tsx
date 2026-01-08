import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
