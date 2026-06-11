import { RiTeamLine } from '@remixicon/react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div style={{ backgroundColor: props.color }} className="w-full flex justify-start items-center text-white gap-4 p-[1em] pr-8 rounded">
      {/* Left */}
      <div className='h-full w-[30%] flex justify-center items-center'>
        <div className='p-[15px] rounded-full bg-gray-100'>
          <RiTeamLine className='text-black'/>
        </div>
      </div>
      {/* Right  */}
      <div className='w-[calc(100% - 30%)]'>
        <h3 className='uppercase text-[14px] font-semibold'>{props.title}</h3>
        <h2 className='text-[22px] font-bold'>{props.num}</h2>
        <div className='w-full h-[5px] bg-[#f5f5f580] rounded overflow-hidden my-2'>
            <div style={{ width: `${props.percent}%` }} className="h-full bg-white"></div>
        </div>
        <p className='text-[12px]'>{props.percent}% Increase in 20 days</p>
      </div>
    </div>
  )
}

export default Card
