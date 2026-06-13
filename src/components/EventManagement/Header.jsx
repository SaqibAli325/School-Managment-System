import {RiArrowRightSLine} from '@remixicon/react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between w-full bg-white p-3 rounded px-5 my-5'>
                <h1 className='text-[18px] font-semibold text-[#6a73fa]'>Events</h1>
                <div className='flex gap-2 text-gray-500 text-[13px] items-center'>
                    <span>Events</span>
                    <RiArrowRightSLine />
                    <span className='font-medium text-[#6a73fa]'>Event Management</span>
                </div>
            </div>
    </div>
  )
}

export default Header
