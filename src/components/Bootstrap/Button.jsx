import {
    RiShoppingCartLine, RiHeartLine, RiCloseLine, RiMailSendLine, RiBookmarkLine, RiCheckLine,
    RiShoppingCart2Line, RiAddLine, RiMailLine, RiShareLine, RiDownloadLine, RiUploadLine,
    RiFacebookFill, RiTwitterFill, RiYoutubeFill, RiInstagramLine, RiPinterestFill, RiLinkedinFill,
    RiGoogleFill, RiSnapchatFill, RiWhatsappFill, RiTumblrFill, RiRedditFill, RiSpotifyFill,
    RiGlobalFill, RiDribbbleFill, RiSkypeFill, RiQuestionAnswerFill, RiVimeoFill,
} from '@remixicon/react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import AccordionCard from './AccordionCard.jsx'
import ButtonItem from './ButtonItem.jsx'

const VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const LABELS = { primary: 'Primary', secondary: 'Secondary', success: 'Success', danger: 'Danger', warning: 'Warning', info: 'Info', light: 'Light', dark: 'Dark' }

const RIGHT_ICON_BTNS = [
    { variant: 'primary', label: 'Add to cart', icon: RiShoppingCartLine },
    { variant: 'success', label: 'Add to wishlist', icon: RiHeartLine },
    { variant: 'danger', label: 'Remove', icon: RiCloseLine },
    { variant: 'secondary', label: 'Sent message', icon: RiMailSendLine },
    { variant: 'warning', label: 'Add bookmark', icon: RiBookmarkLine },
    { variant: 'success', label: 'Success', icon: RiCheckLine },
]

const LEFT_ICON_BTNS = [
    { variant: 'primary', label: 'Buy', icon: RiShoppingCart2Line },
    { variant: 'info', label: 'Add', icon: RiAddLine },
    { variant: 'danger', label: 'Email', icon: RiMailLine },
    { variant: 'secondary', label: 'Share', icon: RiShareLine },
    { variant: 'warning', label: 'Download', icon: RiDownloadLine },
    { variant: 'success', label: 'Upload', icon: RiUploadLine },
]

const SOCIAL_BTNS = [
    { name: 'Facebook', icon: RiFacebookFill, color: '#3b5998' },
    { name: 'Twitter', icon: RiTwitterFill, color: '#1da1f2' },
    { name: 'Youtube', icon: RiYoutubeFill, color: '#ff0000' },
    { name: 'Instagram', icon: RiInstagramLine, color: '#c13584' },
    { name: 'Pinterest', icon: RiPinterestFill, color: '#bd081c' },
    { name: 'LinkedIn', icon: RiLinkedinFill, color: '#0077b5' },
    { name: 'Google +', icon: RiGoogleFill, color: '#dd4b39' },
    { name: 'Google', icon: RiGoogleFill, color: '#4285f4' },
    { name: 'Snapchat', icon: RiSnapchatFill, color: '#fffc00' },
    { name: 'Whatsapp', icon: RiWhatsappFill, color: '#25d366' },
    { name: 'Tumblr', icon: RiTumblrFill, color: '#35465c' },
    { name: 'Reddit', icon: RiRedditFill, color: '#ff4500' },
    { name: 'Spotify', icon: RiSpotifyFill, color: '#1db954' },
    { name: 'Yahoo', icon: RiGlobalFill, color: '#6001d2' },
    { name: 'Dribbble', icon: RiDribbbleFill, color: '#ea4c89' },
    { name: 'Skype', icon: RiSkypeFill, color: '#00aff0' },
    { name: 'Quora', icon: RiQuestionAnswerFill, color: '#aa2200' },
    { name: 'Vimeo', icon: RiVimeoFill, color: '#1ab7ea' },
]

const Button = () => {
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="Hi, welcome back!" subtitle="Bootstrap" childTitle="Bootstrap" grandChildTitle="Buttons" />

                {/* 1. Buttons */}
                <AccordionCard title="Buttons" description="Default button style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='solid'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 2. Buttons Light */}
                <AccordionCard title="Buttons" description="Button Light style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='light'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 3. Outline Buttons */}
                <AccordionCard title="Outline Buttons" description="Default outline button style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='outline'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 4. Button Sizes */}
                <AccordionCard title="Button Sizes" description="add {{.btn-lg .btn-sm .btn-xs}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    <ButtonItem variant='primary' size='lg'>Large Button</ButtonItem>
                    <ButtonItem variant='primary' size='md'>Default Button</ButtonItem>
                    <ButtonItem variant='primary' size='sm'>Small Button</ButtonItem>
                    <ButtonItem variant='primary' size='xs'>Extra Small Button</ButtonItem>
                    <ButtonItem variant='secondary' size='xs'>Extra Small Button</ButtonItem>
                </AccordionCard>

                {/* 5. Outline Button Sizes */}
                <AccordionCard title="Outline Button Sizes" description="add {{.btn-lg .btn-sm .btn-xs}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    <ButtonItem variant='primary' style='outline' size='lg'>Large Button</ButtonItem>
                    <ButtonItem variant='primary' style='outline' size='md'>Default Button</ButtonItem>
                    <ButtonItem variant='primary' style='outline' size='sm'>Small Button</ButtonItem>
                    <ButtonItem variant='primary' style='outline' size='xs'>Extra Small Button</ButtonItem>
                    <ButtonItem variant='secondary' style='outline' size='xs'>Extra Small Button</ButtonItem>
                </AccordionCard>

                {/* 6. Rounded Buttons */}
                <AccordionCard title="Rounded Buttons" description="add {{.btn-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='solid' shape='pill'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 7. Rounded Outline Buttons */}
                <AccordionCard title="Rounded Outline Buttons" description="add {{.btn-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='outline' shape='pill'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 8. Button Right Icons */}
                <AccordionCard title="Button Right Icons" description="add {{.btn-icon-end}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {RIGHT_ICON_BTNS.map((b, i) => (
                        <ButtonItem key={i} variant={b.variant} icon={b.icon} iconPosition='right'>{b.label}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 9. Button Left Icons */}
                <AccordionCard title="Button Left Icons" description="add {{.btn-icon-start}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {LEFT_ICON_BTNS.map((b, i) => (
                        <ButtonItem key={i} variant={b.variant} icon={b.icon} iconPosition='left'>{b.label}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 10. Square Buttons */}
                <AccordionCard title="Square Buttons" description="add {{.btn-square}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='solid' shape='square'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 11. Square Outline Buttons */}
                <AccordionCard title="Square Outline Buttons" description="add {{.btn-square}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='outline' shape='square'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 12. Rounded Button (pill, alt row) */}
                <AccordionCard title="Rounded Button" description="add {{.btn-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='solid' shape='pill'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 13. Rounded Outline Buttons (alt row) */}
                <AccordionCard title="Rounded Outline Buttons" description="add {{.btn-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='outline' shape='pill'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 14. Dropdown Button */}
                <AccordionCard title="Dropdown Button" description="Default dropdown button style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    <ButtonItem variant='primary' dropdown>Primary</ButtonItem>
                    <ButtonItem variant='secondary' dropdown>Secondary</ButtonItem>
                    <ButtonItem variant='success' dropdown>Success</ButtonItem>
                    <ButtonItem variant='warning' dropdown>Warning</ButtonItem>
                    <ButtonItem variant='danger' dropdown>Danger</ButtonItem>
                </AccordionCard>

                {/* 15. Buttons Transparent */}
                <AccordionCard title="Buttons Transparent" description="Button transparent style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='transparent'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 16. Buttons Transparent Light */}
                <AccordionCard title="Buttons Transparent Light" description="Button transparent light style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {VARIANTS.map((v) => (
                        <ButtonItem key={v} variant={v} style='transparent-light'>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 17. Disabled Button */}
                <AccordionCard title="Disabled Button" description="add {{disabled=&quot;disabled&quot;}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map((v) => (
                        <ButtonItem key={v} variant={v} disabled>{LABELS[v]}</ButtonItem>
                    ))}
                </AccordionCard>

                {/* 18. Social Icon Buttons With Name */}
                <AccordionCard title="Social Icon Buttons With Name" description="add {{.btn-facebook, .btn-twitter, .btn-youtube...}} to change the style" listClassName='flex flex-wrap items-center gap-2 mt-4'>
                    {SOCIAL_BTNS.map((b) => (
                        <ButtonItem key={b.name} icon={b.icon} iconPosition='right' brandColor={b.color} className={b.color === '#fffc00' ? '!text-black' : ''}>{b.name}</ButtonItem>
                    ))}
                </AccordionCard>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default Button
