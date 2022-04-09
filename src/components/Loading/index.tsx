import React, { ReactElement } from "react";
import { ILoading } from "../../interface";

function Loading({ title }: ILoading):ReactElement {
  return (
    <div className=' grid justify-items-center w-full  p-5'>
      <p>{title}</p>
    </div>
  );
}

export default Loading;
