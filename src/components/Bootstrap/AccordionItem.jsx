import { RiAddLine, RiSubtractLine } from '@remixicon/react'

// A single collapsible accordion item. Handles the open/close animation,
// icon placement (left/right) and lets each accordion "style" section pass
// its own header/body classes so every variant on the page can share this
// same building block.
const AccordionItem = ({
    title,
    content,
    isOpen,
    onToggle,
    icon: Icon,
    iconPosition = 'right',
    headerClassName = '',
    bodyClassName = '',
    wrapperClassName = '',
    roundedClassName = 'rounded',
}) => {
    return (
        <div className={`overflow-hidden ${roundedClassName} ${wrapperClassName}`}>
            <button
                type='button'
                onClick={onToggle}
                className={`w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left text-[14px] font-medium cursor-pointer transition-colors ${headerClassName}`}
            >
                <span className='flex items-center gap-3'>
                    {Icon && iconPosition === 'left' && <Icon size={17} className='shrink-0' />}
                    {isOpen && !Icon && iconPosition === 'left' && <RiSubtractLine size={17} className='shrink-0' />}
                    {!isOpen && !Icon && iconPosition === 'left' && <RiAddLine size={17} className='shrink-0' />}
                    <span>{title}</span>
                </span>
                {iconPosition === 'right' && (
                    isOpen ? <RiSubtractLine size={17} className='shrink-0' /> : <RiAddLine size={17} className='shrink-0' />
                )}
            </button>
            <div
                className='grid transition-[grid-template-rows] duration-300 ease-in-out'
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className='overflow-hidden'>
                    <p className={`px-5 pb-4 text-[13px] leading-relaxed ${bodyClassName}`}>
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
