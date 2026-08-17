import { useState } from 'react'
import { RiInformationLine } from '@remixicon/react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import ButtonItem from './ButtonItem.jsx'
import ModalDialog from './ModalDialog.jsx'

const INTRO_TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima! Eligendi minima illum itaque harum aliquam vel, sunt magni dolorem! Cum quaerat est cupiditate saepe quidem, fugiat in at magni ad provident distinctio eum tempore laboriosam adipisci, tempora cumque ex quis unde volutatem consequuntur. Excepturi quibusdam accusamus deleniti officiam ullam repellendus magni unde? Saepe quibusdam vel, ipsum numquam ratione tempore. Dolor optio aliquid in velit eaque, sed delectus reprehenderit quam quidem a eum id nostrum ullam obcaecati error delenti modi quasi harum possimus voluptatum repellat saepe! Omnis dolor maiores eaque deserunt exercitationem incidunt autem et voluptatibus molestias quod explicabo ipsam nam vitae a architecto, consectetur quas facilis sed nulla, placeat eum ex, ducimus in. Hic quo necessitatibus autem tempora provident!"

const LONG_PARAGRAPH = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla."

const GRID_CELLS = [
    { cols: 'col-4', bg: '#4954f7' }, { cols: 'col-4', bg: '#9333ea' }, { cols: 'col-4', bg: '#16a34a' },
    { cols: 'col-6', bg: '#f59e0b' }, { cols: 'col-6', bg: '#06b6d4' },
    { cols: 'col-12', bg: '#ef4444' },
]

const MODALS = [
    { key: 'basic', label: 'Basic modal' },
    { key: 'long', label: 'Long content Modal' },
    { key: 'centered', label: 'Modal centered' },
    { key: 'tooltip', label: 'Modal with tooltip' },
    { key: 'grid', label: 'Grid Inside Modal' },
    { key: 'large', label: 'Large modal' },
    { key: 'small', label: 'Small modal' },
]

const Modal = () => {
    const [active, setActive] = useState(null)
    const close = () => setActive(null)

    const FooterBtns = (
        <>
            <ButtonItem variant='light' style='light' onClick={close}>Close</ButtonItem>
            <ButtonItem variant='primary' onClick={close}>Save changes</ButtonItem>
        </>
    )

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="Hi, welcome back!" subtitle="Bootstrap" childTitle="Bootstrap" grandChildTitle="Modal" />

                <div className='bg-white rounded shadow-sm p-5 mt-4'>
                    <h2 className='text-[16px] font-semibold text-gray-800 pb-4 border-b border-gray-100'>Bootstrap Modal</h2>

                    <p className='text-[13px] text-gray-500 leading-relaxed mt-4'>{INTRO_TEXT}</p>

                    <div className='flex flex-wrap items-center gap-2 mt-5'>
                        {MODALS.map((m) => (
                            <ButtonItem key={m.key} variant='primary' onClick={() => setActive(m.key)}>{m.label}</ButtonItem>
                        ))}
                    </div>
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>

            {/* Basic modal */}
            <ModalDialog isOpen={active === 'basic'} onClose={close} title='Basic Modal' footer={FooterBtns}>
                <p>{LONG_PARAGRAPH}</p>
            </ModalDialog>

            {/* Long content modal */}
            <ModalDialog isOpen={active === 'long'} onClose={close} title='Long Content Modal' footer={FooterBtns}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <p key={i} className='mb-3'>{LONG_PARAGRAPH}</p>
                ))}
            </ModalDialog>

            {/* Centered modal */}
            <ModalDialog isOpen={active === 'centered'} onClose={close} title='Modal Centered' centered footer={FooterBtns}>
                <p>{LONG_PARAGRAPH}</p>
            </ModalDialog>

            {/* Modal with tooltip */}
            <ModalDialog isOpen={active === 'tooltip'} onClose={close} title='Modal With Tooltip' footer={FooterBtns}>
                <p className='mb-3'>{LONG_PARAGRAPH}</p>
                <span
                    className='relative inline-flex items-center gap-1 text-[#4954f7] font-medium cursor-help group'
                    title='This is a helpful tooltip.'
                >
                    <RiInformationLine size={16} />
                    Hover this text to see a tooltip
                </span>
            </ModalDialog>

            {/* Grid inside modal */}
            <ModalDialog isOpen={active === 'grid'} onClose={close} title='Grid Inside Modal' size='lg' footer={FooterBtns}>
                <div className='flex flex-wrap gap-2'>
                    {GRID_CELLS.map((cell, i) => {
                        const widthClass = cell.cols === 'col-4' ? 'basis-[calc(33.333%-0.5rem)]' : cell.cols === 'col-6' ? 'basis-[calc(50%-0.375rem)]' : 'basis-full'
                        return (
                            <div
                                key={i}
                                className={`${widthClass} h-14 rounded flex items-center justify-center text-white text-[12px] font-medium`}
                                style={{ backgroundColor: cell.bg }}
                            >
                                {cell.cols}
                            </div>
                        )
                    })}
                </div>
            </ModalDialog>

            {/* Large modal */}
            <ModalDialog isOpen={active === 'large'} onClose={close} title='Large Modal' size='lg' footer={FooterBtns}>
                <p>{LONG_PARAGRAPH}</p>
            </ModalDialog>

            {/* Small modal */}
            <ModalDialog isOpen={active === 'small'} onClose={close} title='Small Modal' size='sm' footer={FooterBtns}>
                <p>{LONG_PARAGRAPH}</p>
            </ModalDialog>
        </div>
    )
}

export default Modal
