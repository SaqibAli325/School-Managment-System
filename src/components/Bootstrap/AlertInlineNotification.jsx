import { ALERT_VARIANTS } from './AlertItem.jsx'

// Card style confirmation prompt: title, paragraph and Confirm / Cancel
// actions, used in the Inline Notifications demo section.
const AlertInlineNotification = ({ variant = 'primary', title, message, onConfirm, onCancel }) => {
    const c = ALERT_VARIANTS[variant]

    return (
        <div className='rounded px-4 py-3.5 text-[13px]' style={{ backgroundColor: c.light, color: c.text }}>
            <p className='font-semibold mb-1'>{title}</p>
            <p className='leading-relaxed opacity-90 mb-3'>{message}</p>
            <div className='flex items-center gap-4'>
                <button
                    type='button'
                    onClick={onConfirm}
                    className='px-4 py-1.5 rounded text-white text-[12px] font-medium cursor-pointer'
                    style={{ backgroundColor: c.solid }}
                >
                    Confirm
                </button>
                <button type='button' onClick={onCancel} className='text-[12px] font-medium cursor-pointer opacity-80 hover:opacity-100'>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default AlertInlineNotification
