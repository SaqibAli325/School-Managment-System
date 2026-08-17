import { RiCloseLine } from '@remixicon/react'

// Color tokens for each bootstrap-style variant, used to build the light,
// solid and outline alert looks throughout the Alert demo page.
export const ALERT_VARIANTS = {
    primary: { light: '#e1e4ff', solid: '#4954f7', text: '#4954f7' },
    secondary: { light: '#efdffe', solid: '#9333ea', text: '#9333ea' },
    success: { light: '#d7f7e3', solid: '#16a34a', text: '#16a34a' },
    info: { light: '#cef7fb', solid: '#06b6d4', text: '#0891b2' },
    warning: { light: '#fef0c7', solid: '#f59e0b', text: '#d97706' },
    danger: { light: '#fddcdc', solid: '#ef4444', text: '#ef4444' },
    dark: { light: '#e3e6ea', solid: '#1f2937', text: '#1f2937' },
    light: { light: '#f0f1f5', solid: '#9ca3af', text: '#6b7280' },
}

// One flexible alert row that can render as the light/tinted style, the
// solid filled style, or an outline style, optionally dismissible, with a
// square/rounded/pill shape and an optional leading icon.
const AlertItem = ({
    variant = 'primary',
    style = 'light',
    shape = 'default',
    icon: Icon,
    title,
    message,
    dismissible = false,
    link,
    onDismiss,
    className = '',
}) => {
    const c = ALERT_VARIANTS[variant]

    const shapeClass = shape === 'square' ? 'rounded-none' : shape === 'pill' ? 'rounded-full' : 'rounded'

    let styleClasses = ''
    let inlineStyle = {}
    let textColor = ''

    if (style === 'solid') {
        inlineStyle = { backgroundColor: c.solid }
        textColor = 'text-white'
    } else if (style === 'outline') {
        styleClasses = 'bg-white border'
        inlineStyle = { borderColor: c.solid, color: c.text }
    } else {
        inlineStyle = { backgroundColor: c.light, color: c.text }
    }

    return (
        <div
            className={`flex items-center gap-2.5 px-4 py-3 text-[13px] ${shapeClass} ${styleClasses} ${textColor} ${className}`}
            style={inlineStyle}
        >
            {Icon && <Icon size={18} className='shrink-0' />}
            <p className='flex-1 leading-relaxed'>
                {title && <strong className='font-semibold'>{title} </strong>}
                {message}
                {link && (
                    <a className='font-semibold underline cursor-pointer ml-1'>{link}</a>
                )}
            </p>
            {dismissible && (
                <button
                    type='button'
                    onClick={onDismiss}
                    className='shrink-0 opacity-70 hover:opacity-100 cursor-pointer'
                >
                    <RiCloseLine size={16} />
                </button>
            )}
        </div>
    )
}

export default AlertItem
