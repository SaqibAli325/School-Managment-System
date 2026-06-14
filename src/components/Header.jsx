import {RiArrowRightSLine} from '@remixicon/react'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <div className='flex justify-between w-full bg-white p-3 rounded px-5 mt-3'>
                <h1 className='text-[18px] font-semibold text-[#6a73fa]'>{props.parentTitle}</h1>
                <div className='flex gap-2 text-gray-500 text-[13px] items-center'>
                    <span>{props.childTitle}</span>
                    <RiArrowRightSLine />
                    <span className='font-medium text-[#6a73fa]'>{props.grandChildTitle}</span>
                </div>
            </div>
    </div>
  )
}

export default Header
