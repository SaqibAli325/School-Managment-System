
const AccordionCard = ({ title, description, listClassName = 'flex flex-col gap-3', children }) => {

    const renderDescription = () => {
        const parts = description.split(/(\{\{.*?\}\})/g)
        return parts.map((part, i) => {
            const match = part.match(/^\{\{(.*?)\}\}$/)
            if (match) {
                return (
                    <code key={i} className='bg-[#fde2e1] text-[#f1556c] rounded px-1.5 py-0.5 text-[12px] font-mono mx-0.5'>
                        {match[1]}
                    </code>
                )
            }
            return <span key={i}>{part}</span>
        })
    }

    return (
        <div className='bg-white rounded shadow-sm p-5 flex flex-col gap-4'>
            <div className='pb-4 border-b border-gray-100'>
                <h2 className='text-[16px] font-semibold text-gray-800'>{title}</h2>
                <p className='text-[13px] text-gray-500 mt-1 leading-relaxed'>{renderDescription()}</p>
            </div>
            <div className={listClassName}>
                {children}
            </div>
        </div>
    )
}

export default AccordionCard
