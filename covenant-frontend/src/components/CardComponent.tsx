import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardComponent = (props: Props) => {
  return (
    <div className=" p-5 w-full border shadow-md rounded-sm mt-2">
      {props.children}
    </div>
  );
};

export default CardComponent;
