import React, { forwardRef, useId } from 'react'
// when taking options it should be array
const Select = ({options=[], label, className="", ...props},ref) => {
  const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>{label}</label>}
      <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {/* this works really well only map if it is iterable */}
        {/* otherwise it may crash if options doesn't have any value it will crash */}
        {options?.map((option)=>(
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default forwardRef(Select)