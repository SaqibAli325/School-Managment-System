import { ALERT_VARIANTS } from './AlertItem.jsx'

// Alert with a large icon tile on the left and a title / subtitle stacked
// on the right, used in the Alert Left Icon Big demo section.
const AlertBigIcon = ({ variant = 'primary', icon: Icon, title, message }) => {
    const c = ALERT_VARIANTS[variant]

    return (
        <div className='flex items-center gap-3 rounded px-4 py-3 text-[13px]' style={{ backgroundColor: c.light }}>
            <div className='shrink-0 w-11 h-11 rounded flex items-center justify-center text-white' style={{ backgroundColor: c.solid }}>
                <Icon size={22} />
            </div>
            <div>
                <p className='font-semibold' style={{ color: c.text }}>{title}</p>
                <p className='text-gray-500 mt-0.5'>{message}</p>
            </div>
        </div>
    )
}

export default AlertBigIcon
