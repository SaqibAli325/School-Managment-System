import { RiArrowDownSLine } from '@remixicon/react'

// Color tokens for each bootstrap-style variant used across the Button demo page.
export const BUTTON_VARIANTS = {
    primary: { solid: '#4954f7', light: '#e1e4ff', text: '#4954f7' },
    secondary: { solid: '#9333ea', light: '#efdffe', text: '#9333ea' },
    success: { solid: '#16a34a', light: '#d7f7e3', text: '#16a34a' },
    info: { solid: '#06b6d4', light: '#cef7fb', text: '#0891b2' },
    warning: { solid: '#f59e0b', light: '#fef0c7', text: '#d97706' },
    danger: { solid: '#ef4444', light: '#fddcdc', text: '#ef4444' },
    dark: { solid: '#1f2937', light: '#e3e6ea', text: '#1f2937' },
    light: { solid: '#9ca3af', light: '#f0f1f5', text: '#6b7280' },
}

const SIZE_CLASSES = {
    xs: 'text-[11px] px-2.5 py-1',
    sm: 'text-[12px] px-3 py-1.5',
    md: 'text-[13px] px-4 py-2',
    lg: 'text-[15px] px-6 py-3',
}

const ICON_WRAP_HEIGHT = {
    xs: 'h-7',
    sm: 'h-8',
    md: 'h-9',
    lg: 'h-10',
}

const ICON_LABEL_TEXT = {
    xs: 'text-[11px]',
    sm: 'text-[12px]',
    md: 'text-[13px]',
    lg: 'text-[15px]',
}

const ICON_LABEL_PAD = {
    left: {
        xs: 'pr-3',
        sm: 'pr-3.5',
        md: 'pr-4',
        lg: 'pr-5',
    },
    right: {
        xs: 'pl-3',
        sm: 'pl-3.5',
        md: 'pl-4',
        lg: 'pl-5',
    },
}

const ICON_SLOT_WIDTH = {
    xs: 'w-7',
    sm: 'w-8',
    md: 'w-9',
    lg: 'w-10',
}

const ICON_CIRCLE_SIZE = {
    xs: 20,
    sm: 24,
    md: 28,
    lg: 32,
}

const ICON_PIXEL_SIZE = {
    xs: 12,
    sm: 13,
    md: 15,
    lg: 17,
}

const ButtonItem = ({
    variant = 'primary',
    style = 'solid',
    shape = 'default',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    dropdown = false,
    disabled = false,
    brandColor,
    className = '',
    children,
    onClick,
}) => {
    const c = BUTTON_VARIANTS[variant]
    const solidColor = brandColor || c.solid

    const shapeClass = shape === 'square' ? 'rounded-none' : shape === 'pill' ? 'rounded-full' : 'rounded'

    let inlineStyle = {}
    let extraClass = 'text-white'

    if (style === 'outline') {
        inlineStyle = { borderColor: solidColor, color: brandColor || c.text }
        extraClass = 'bg-white border'
    } else if (style === 'light') {
        inlineStyle = { backgroundColor: c.light, color: c.text }
        extraClass = ''
    } else if (style === 'transparent') {
        inlineStyle = { color: solidColor }
        extraClass = 'bg-transparent'
    } else if (style === 'transparent-light') {
        inlineStyle = { color: c.text, opacity: 0.6 }
        extraClass = 'bg-transparent'
    } else {
        inlineStyle = { backgroundColor: solidColor }
    }

    const hasIcon = Boolean(Icon)
    const isWhiteText = extraClass.includes('text-white')
    const dividerColor = style === 'outline' ? solidColor : (isWhiteText ? 'rgba(255,255,255,0.4)' : 'currentColor')
    const iconPx = ICON_PIXEL_SIZE[size]
    const circle = ICON_CIRCLE_SIZE[size]

    if (hasIcon) {
        return (
            <button
                type='button'
                disabled={disabled}
                onClick={onClick}
                className={`inline-flex gap-3 items-center font-medium leading-none transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 ${shapeClass} ${ICON_LABEL_TEXT[size]} ${extraClass} ${className}`}
                style={{ ...inlineStyle, padding: 1 }}
            >
                {iconPosition === 'left' && (
                    <span
                        className='shrink-0 bg-white rounded-full flex items-center justify-center'
                        style={{ width: circle, height: circle, color: solidColor }}
                    >
                        <Icon size={iconPx} />
                    </span>
                )}

                <span className={`${ICON_WRAP_HEIGHT[size]} flex items-center pl-2.5 ${ICON_LABEL_PAD[iconPosition][size]}`}>
                    {children}
                </span>

                {iconPosition === 'right' && (
                    <span
                        className={`shrink-0 self-stretch flex items-center justify-center border-l ${ICON_SLOT_WIDTH[size]}`}
                        style={{ borderColor: dividerColor }}
                    >
                        <Icon size={iconPx} />
                    </span>
                )}
            </button>
        )
    }

    return (
        <button
            type='button'
            disabled={disabled}
            onClick={onClick}
            className={`inline-flex items-center justify-center gap-1.5 font-medium leading-none transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 ${shapeClass} ${SIZE_CLASSES[size]} ${extraClass} ${className}`}
            style={inlineStyle}
        >
            {children}
            {dropdown && <RiArrowDownSLine size={15} />}
        </button>
    )
}

export default ButtonItem
