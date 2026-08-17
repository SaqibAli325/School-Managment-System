// Color tokens for each bootstrap-style variant used across the Badge demo page.
export const BADGE_VARIANTS = {
    primary: { light: '#e1e4ff', solid: '#4954f7', text: '#4954f7' },
    secondary: { light: '#efdffe', solid: '#9333ea', text: '#9333ea' },
    success: { light: '#d7f7e3', solid: '#16a34a', text: '#16a34a' },
    info: { light: '#cef7fb', solid: '#06b6d4', text: '#0891b2' },
    warning: { light: '#fef0c7', solid: '#f59e0b', text: '#d97706' },
    danger: { light: '#fddcdc', solid: '#ef4444', text: '#ef4444' },
    dark: { light: '#e3e6ea', solid: '#1f2937', text: '#1f2937' },
    light: { light: '#f0f1f5', solid: '#9ca3af', text: '#6b7280' },
}

const SIZE_CLASSES = {
    xs: 'text-[9px] px-1.5 py-0.5',
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-[12px] px-2.5 py-1',
    lg: 'text-[14px] px-3.5 py-1.5',
    xl: 'text-[16px] px-4 py-2',
}

// One flexible badge that can render as a light/tinted pill, a solid badge,
// an outline badge, a link badge, or a numbered circle, in any bootstrap size.
const BadgeItem = ({
    variant = 'primary',
    style = 'solid',
    shape = 'default',
    size = 'md',
    as = 'span',
    className = '',
    children,
}) => {
    const c = BADGE_VARIANTS[variant]
    const Tag = as

    const shapeClass =
        shape === 'pill' ? 'rounded-full'
            : shape === 'circle' ? 'rounded-full aspect-square inline-flex items-center justify-center'
                : 'rounded'

    let styleClasses = 'inline-flex items-center justify-center font-medium leading-none'
    let inlineStyle = {}

    if (style === 'outline') {
        styleClasses += ' bg-white border'
        inlineStyle = { borderColor: c.solid, color: c.text }
    } else if (style === 'light') {
        inlineStyle = { backgroundColor: c.light, color: c.text }
    } else {
        inlineStyle = { backgroundColor: c.solid, color: '#ffffff' }
    }

    return (
        <Tag
            className={`${styleClasses} ${shapeClass} ${SIZE_CLASSES[size]} ${style === 'link' ? 'cursor-pointer hover:opacity-90' : ''} ${className}`}
            style={inlineStyle}
        >
            {children}
        </Tag>
    )
}

export default BadgeItem
