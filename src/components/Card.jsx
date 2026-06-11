
const Card = (props) => {
  const Icon = props.img? props.img : null;
  const isWhiteBg = props.color === '#ffffff' || props.color === 'white';
  
  // Convert titleStyle object to Tailwind classes if it matches Dashboard2 structure
  const titleClasses = props.titleStyle && props.titleStyle.size === '1rem' 
    ? "text-[1rem] pt-4 font-[600]" 
    : "text-[14px] font-semibold";

  const titleInlineStyle = !props.titleStyle?.size ? props.titleStyle : {};

  return (
    <div style={{ backgroundColor: props.color }} className={`w-full flex justify-start items-center ${isWhiteBg ? 'text-black shadow-sm' : `text-${props.textColor || 'white'}`} gap-4 p-[1em] pr-8 rounded`}>
      {/* Left */}
      {Icon && (
        <div className='h-full w-[25%] flex justify-center items-center'>
          <div className='p-[15px] rounded-full bg-gray-100'>
            <Icon className='text-black' size={24} />
          </div>
        </div>
      )}
      {/* Right  */}
      <div className='w-full'>
        <h3 className={titleClasses} style={titleInlineStyle}>{props.title}</h3>
        <h2 className='text-[22px] font-bold'>{props.num}</h2>
        <div className={`w-full h-[5px] ${isWhiteBg ? 'bg-gray-100' : 'bg-[#f5f5f580]'} rounded overflow-hidden my-2`}>
            <div style={{ width: `${props.percent}%`, backgroundColor: props.lineColor || 'white' }} className="h-full"></div>
        </div>
        {/* Hardcoded 20 ki jagah props.days use kiya */}
        <p className={`text-[12px] ${isWhiteBg ? 'text-gray-500' : ''}`}>{props.percent}% Increase in {props.days} days</p>
      </div>
    </div>
  )
}

export default Card
