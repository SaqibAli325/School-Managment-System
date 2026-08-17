import { RiCloseLine } from '@remixicon/react'
import { ALERT_VARIANTS } from './AlertItem.jsx'

// Bigger "notification" style alert: bold title, a longer paragraph and a
// dismiss button pinned to the top-right corner. Used by the Message Alert
// and Message Alert With Solid Color demo sections.
const AlertMessageCard = ({ variant = 'primary', solid = false, title, message, onDismiss }) => {
    const c = ALERT_VARIANTS[variant]
    const style = solid ? { backgroundColor: c.solid } : { backgroundColor: c.light }
    const textClass = solid ? 'text-white' : ''

    return (
        <div className={`relative rounded px-4 py-3.5 pr-8 text-[13px] ${textClass}`} style={{ ...style, color: solid ? '#fff' : c.text }}>
            <button type='button' onClick={onDismiss} className='absolute top-3 right-3 opacity-70 hover:opacity-100 cursor-pointer'>
                <RiCloseLine size={16} />
            </button>
            <p className='font-semibold mb-1'>{title}</p>
            <p className='leading-relaxed opacity-90'>{message}</p>
        </div>
    )
}

export default AlertMessageCard
