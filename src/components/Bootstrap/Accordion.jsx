import { useState } from 'react'
import { RiChat3Line } from '@remixicon/react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import AccordionCard from './AccordionCard.jsx'
import AccordionItem from './AccordionItem.jsx'

const LOREM = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."

const HEADERS = ["Accordion Header One", "Accordion Header Two", "Accordion Header Three"]

const useAccordionState = (defaultIndex = 0) => {
    const [openIndex, setOpenIndex] = useState(defaultIndex)
    const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))
    return [openIndex, toggle]
}

const Accordion = () => {
    const [openDefault, toggleDefault] = useAccordionState(0)
    const [openBordered, toggleBordered] = useAccordionState(0)
    const [openNoGutter, toggleNoGutter] = useAccordionState(0)
    const [openNoGutterBorder, toggleNoGutterBorder] = useAccordionState(0)
    const [openLeftIndicator, toggleLeftIndicator] = useAccordionState(0)
    const [openWithIcon, toggleWithIcon] = useAccordionState(0)
    const [openHeaderBg, toggleHeaderBg] = useAccordionState(0)
    const [openSolidBg, toggleSolidBg] = useAccordionState(0)
    const [openActiveBg, toggleActiveBg] = useAccordionState(0)
    const [openHeaderShadow, toggleHeaderShadow] = useAccordionState(0)
    const [openRoundedStylish, toggleRoundedStylish] = useAccordionState(0)
    const [openGradient, toggleGradient] = useAccordionState(0)

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="Hi, welcome back!" subtitle="Bootstrap" childTitle="Bootstrap" grandChildTitle="Accordion" />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>

                    {/* 1. Default Accordion */}
                    <AccordionCard title="Default Accordion" description="Default accordion. Add {{accordion}} class in root">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openDefault === i}
                                onToggle={() => toggleDefault(i)}
                                headerClassName={openDefault === i ? 'bg-[#6a73fa] text-white' : 'bg-[#eef0fd] text-[#8791f5]'}
                                bodyClassName='text-gray-500 bg-white'
                            />
                        ))}
                    </AccordionCard>

                    {/* 2. Accordion Bordered */}
                    <AccordionCard title="Accordion Bordered" description="Accordion with border. Add class {{accordion-bordered}} with the class {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <div key={h} className={openBordered === i ? 'border border-[#f1556c] rounded overflow-hidden' : ''}>
                                <AccordionItem
                                    title={h}
                                    content={LOREM}
                                    isOpen={openBordered === i}
                                    onToggle={() => toggleBordered(i)}
                                    headerClassName={openBordered === i ? 'bg-[#FF1616] text-white' : 'bg-[#fbd7d7] text-black'}
                                    bodyClassName='text-gray-500 bg-white'
                                    roundedClassName={openBordered === i ? '' : 'rounded'}
                                />
                            </div>
                        ))}
                    </AccordionCard>

                    {/* 3. Accordion Without Space */}
                    <AccordionCard title="Accordion Without Space" description="Add {{accordion-no-gutter}} class with {{accordion}}" listClassName='flex flex-col rounded overflow-hidden divide-y divide-gray-200'>
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openNoGutter === i}
                                onToggle={() => toggleNoGutter(i)}
                                headerClassName='bg-[#f7f7f9] text-gray-700 hover:bg-gray-100 '
                                bodyClassName='text-gray-500 '
                                roundedClassName=''
                            />
                        ))}
                    </AccordionCard>

                    {/* 4. Accordion Without Space With Border */}
                    <AccordionCard title="Accordion Without Space With Border" description="Add {{accordion-no-gutter accordion-bordered}} class with {{accordion}}" listClassName='flex flex-col rounded overflow-hidden divide-y divide-gray-200 border border-gray-200'>
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openNoGutterBorder === i}
                                onToggle={() => toggleNoGutterBorder(i)}
                                headerClassName='bg-white text-gray-700 hover:bg-gray-50'
                                bodyClassName='text-gray-500 bg-white'
                                roundedClassName=''
                            />
                        ))}
                    </AccordionCard>

                    {/* 5. Accordion Indicator In Left Position */}
                    <AccordionCard title="Accordion Indicator In Left Position" description="Add {{accordion-left-indicator}} class with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openLeftIndicator === i}
                                onToggle={() => toggleLeftIndicator(i)}
                                iconPosition='left'
                                headerClassName='bg-[#f7f7f9] text-gray-700 hover:bg-gray-100'
                                bodyClassName='text-gray-500 '
                            />
                        ))}
                    </AccordionCard>

                    {/* 6. Accordion With Icon */}
                    <AccordionCard title="Accordion With Icon" description="Add {{accordion-with-icon}} class with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openWithIcon === i}
                                onToggle={() => toggleWithIcon(i)}
                                iconPosition='left'
                                icon={RiChat3Line}
                                headerClassName='bg-[#f7f7f9] text-gray-700 hover:bg-gray-100'
                                bodyClassName='text-gray-500'
                            />
                        ))}
                    </AccordionCard>

                    {/* 7. Accordion Header Background */}
                    <AccordionCard title="Accordion Header Background" description="Add {{accordion-header-bg}} class with {{accordion}}">
                        {HEADERS.map((h, i) => {
                            const colors = ['bg-[#6a73fa]', 'bg-[#2ec8ab]', 'bg-[#565ee0]']
                            return (
                                <AccordionItem
                                    key={h}
                                    title={h}
                                    content={LOREM}
                                    isOpen={openHeaderBg === i}
                                    onToggle={() => toggleHeaderBg(i)}
                                    headerClassName={`${colors[i]} text-white`}
                                    bodyClassName='text-gray-500 bg-white'
                                />
                            )
                        })}
                    </AccordionCard>

                    {/* 8. Accordion Solid Background */}
                    <AccordionCard title="Accordion Solid Background" description="Add class {{accordion-solid-bg}} with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openSolidBg === i}
                                onToggle={() => toggleSolidBg(i)}
                                headerClassName='bg-[#eef0fb] text-gray-700 hover:bg-[#e6e8f8]'
                                bodyClassName='text-gray-500'
                            />
                        ))}
                    </AccordionCard>

                    {/* 9. Accordion Active Background */}
                    <AccordionCard title="Accordion Active Background" description="Add class {{accordion-active-header}} with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openActiveBg === i}
                                onToggle={() => toggleActiveBg(i)}
                                headerClassName={openActiveBg === i ? 'bg-[#2ec8ab] text-white' : 'bg-[#f7f7f9] text-gray-700 hover:bg-gray-100'}
                                bodyClassName='text-gray-500 bg-white'
                            />
                        ))}
                    </AccordionCard>

                    {/* 10. Accordion Header Shadow */}
                    <AccordionCard title="Accordion Header Shadow" description="Add {{accordion-header-shadow}} and {{accordion-rounded}} class with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openHeaderShadow === i}
                                onToggle={() => toggleHeaderShadow(i)}
                                headerClassName='bg-[#f7f7f9] text-gray-700 shadow-md hover:bg-gray-100'
                                bodyClassName='text-gray-500 bg-white'
                                roundedClassName='rounded-lg'
                            />
                        ))}
                    </AccordionCard>

                    {/* 11. Accordion Rounded Stylish */}
                    <AccordionCard title="Accordion Rounded Stylish" description="Add {{accordion-rounded-stylish}} class with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openRoundedStylish === i}
                                onToggle={() => toggleRoundedStylish(i)}
                                headerClassName='bg-[#f7f7f9] text-gray-700 hover:bg-gray-100'
                                bodyClassName='text-gray-500 '
                                roundedClassName='rounded-xl'
                            />
                        ))}
                    </AccordionCard>

                    {/* 12. Accordion Gradient */}
                    <AccordionCard title="Accordion Gradient" description="Add {{accordion-gradient}} class with {{accordion}}">
                        {HEADERS.map((h, i) => (
                            <AccordionItem
                                key={h}
                                title={h}
                                content={LOREM}
                                isOpen={openGradient === i}
                                onToggle={() => toggleGradient(i)}
                                headerClassName='bg-gradient-to-r from-[#e0399f] to-[#8a3fe0] text-white'
                                bodyClassName='text-white/90 bg-gradient-to-r from-[#e0399f] to-[#8a3fe0]'
                            />
                        ))}
                    </AccordionCard>

                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default Accordion
