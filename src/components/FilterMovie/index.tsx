import React, { ChangeEvent, ReactElement } from 'react'
import { ISection } from '../../interface'
function FilterMovie({ val, setVal, placeholder}:ISection):ReactElement {
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };
  
  return (
    <div className='block mx-auto  w-10/12 '>
       <input
       className='flex sm:w-92 md:w-96 lg:w-96 xl:w-96 2xl:w-96 border-2 p-2 rounded-lg mx-auto outline-none'
          type="text"
          value={val}
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
  )
}

export default FilterMovie