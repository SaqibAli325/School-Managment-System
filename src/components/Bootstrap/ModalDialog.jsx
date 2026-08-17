import { RiCloseLine } from '@remixicon/react'

const SIZE_CLASSES = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
}

// A single reusable Bootstrap-style modal dialog: backdrop + dismissible
// panel, optional footer, optional vertical centering, three sizes.
const ModalDialog = ({ isOpen, onClose, title, size = 'md', centered = false, footer, children }) => {
    if (!isOpen) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-center bg-black/50 p-4 overflow-y-auto ${centered ? 'items-center' : 'items-start pt-16'}`}
            onClick={onClose}
        >
            <div
                className={`w-full ${SIZE_CLASSES[size]} bg-white rounded shadow-xl flex flex-col max-h-[80vh]`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0'>
                    <h3 className='text-[16px] font-semibold text-gray-800'>{title}</h3>
                    <button type='button' onClick={onClose} className='text-gray-400 hover:text-gray-700 cursor-pointer'>
                        <RiCloseLine size={20} />
                    </button>
                </div>

                <div className='px-5 py-4 overflow-y-auto text-[13px] text-gray-600 leading-relaxed'>
                    {children}
                </div>

                {footer && (
                    <div className='flex justify-end gap-2 px-5 py-4 border-t border-gray-100 shrink-0'>
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModalDialog
