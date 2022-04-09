import React, { ReactElement } from "react";
import { useReduxSelector } from "../../redux/hooks";

function Footer(): ReactElement {
  const {  loading } = useReduxSelector((state) => state.movies);

  return (
    <div style={{backgroundColor  :"#36383c"}} className={ loading ?  " flex justify-center	 items-center w-full h-[50px] relative bottom-0 " : "flex justify-center	  items-center w-full h-[50px]  absolute"}>
      <p className="text-white">
        ❮❯ by <a href="#"> Erjus Stafa</a> {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
