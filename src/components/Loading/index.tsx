import React, { ReactElement } from "react";
import { ILoading } from "../../interface";
import styles from "./styles.module.css";

function Loading({ title }: ILoading): ReactElement {
  return (
    <div className=" grid justify-items-center w-full  p-5 relative top-[100px]">
      <div className={`${styles.circle}`}>
        <div></div>
        <div> </div>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Loading;
