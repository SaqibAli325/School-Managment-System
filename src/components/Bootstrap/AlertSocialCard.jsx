import { RiCloseLine } from '@remixicon/react'

// Brand-colored alert used in the Alert Social demo section: an icon badge
// on the left in a slightly darker shade of the brand color, title +
// message in the middle, dismiss button on the right.
const AlertSocialCard = ({ icon: Icon, brand, iconBg, title, message, onDismiss }) => {
    return (
        <div className='flex items-start gap-3 rounded px-4 py-3.5 text-[13px] text-white' style={{ backgroundColor: brand }}>
            <div className='shrink-0 w-8 h-8 rounded flex items-center justify-center' style={{ backgroundColor: iconBg }}>
                <Icon size={18} />
            </div>
            <p className='flex-1 leading-relaxed'>
                <strong className='block font-semibold mb-0.5'>{title}</strong>
                <span className='opacity-90'>{message}</span>
            </p>
            <button type='button' onClick={onDismiss} className='shrink-0 opacity-70 hover:opacity-100 cursor-pointer'>
                <RiCloseLine size={16} />
            </button>
        </div>
    )
}

export default AlertSocialCard
