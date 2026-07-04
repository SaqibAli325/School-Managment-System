import { RiArrowRightSLine } from '@remixicon/react'

const Header = (props) => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full bg-white p-3 rounded px-5 mt-3 gap-2'>
        <div>
          <h1 className='text-[18px] font-semibold text-[#6a73fa] truncate'>{props.parentTitle}</h1>
          {props.subtitle && (
            <p className='text-[13px] text-gray-400 mt-0.5 truncate'>{props.subtitle}</p>
          )}
        </div>
        <div className='flex flex-wrap gap-2 text-gray-500 text-[13px] items-center'>
          <span className='whitespace-nowrap'>{props.childTitle}</span>
          <RiArrowRightSLine className='shrink-0' size={16} />
          <span className='font-medium text-[#6a73fa]'>{props.grandChildTitle}</span>
        </div>
      </div>
    </div>
  )
}

export default Header