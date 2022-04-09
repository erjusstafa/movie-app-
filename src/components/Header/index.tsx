import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom';

function Header():ReactElement {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className=' w-full h-[80px] bg-[white] drop-shadow-2xl	flex'>
        <div className=' flex items-center w-10/12  mx-auto justify-between'>
        <div className=''>
         <div onClick={goToHome} className="cursor-pointer">
           <strong>𝓶𝓸𝓿𝓲𝓮 𝓪𝓹𝓹</strong>
         </div>
        </div>
        <div className=' py-1 px-4 border-2 rounded-lg cursor-pointer hover:bg-[#eae6e6]'>
          <span>Docs</span>

        </div>
        </div>

    </div>
  )
}

export default Header