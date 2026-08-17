import { useState } from 'react'
import {
    RiMailLine, RiCheckLine, RiCheckboxCircleLine, RiInformationLine,
    RiAlarmWarningLine, RiCloseCircleLine, RiFacebookFill, RiTwitterFill,
    RiLinkedinFill, RiGoogleFill, RiMailOpenLine, RiTimeLine, RiErrorWarningFill
} from '@remixicon/react'
import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import AccordionCard from './AccordionCard.jsx'
import AlertItem from './AlertItem.jsx'
import AlertMessageCard from './AlertMessageCard.jsx'
import AlertInlineNotification from './AlertInlineNotification.jsx'
import AlertSocialCard from './AlertSocialCard.jsx'
import AlertBigIcon from './AlertBigIcon.jsx'


const VARIANT_ROWS = [
    { variant: 'primary', icon: RiMailLine, title: 'Welcome!', message: 'Your profile has been created.' },
    { variant: 'secondary', icon: RiCheckLine, title: 'Done!', message: 'Your profile photo updated.' },
    { variant: 'success', icon: RiCheckboxCircleLine, title: 'Success!', message: 'Message has been sent.' },
    { variant: 'info', icon: RiInformationLine, title: 'Info!', message: 'You have got 5 new email.' },
    { variant: 'warning', icon: RiAlarmWarningLine, title: 'Warning!', message: 'Something went wrong. Please check.' },
    { variant: 'danger', icon: RiCloseCircleLine, title: 'Error!', message: 'Message sending failed.' },
    { variant: 'dark', icon: RiCloseCircleLine, title: 'Error!', message: 'You successfully read this important alert message.' },
    { variant: 'light', icon: RiCloseCircleLine, title: 'Error!', message: 'You successfully read this message.' },
]

const PLAIN_ROWS = VARIANT_ROWS.map(({ icon, ...rest }) => rest)

const LINK_ROWS = [
    { variant: 'primary', title: 'WOW!', message: 'Everything looks OK. Please check this one as well.' },
    { variant: 'secondary', title: 'WOW!', message: 'Everything looks OK. Please check this one as well.' },
    { variant: 'success', title: 'WOW!', message: 'Everything looks OK. Please check this one as well.' },
    { variant: 'info', title: 'Hey!', message: 'Take a quick look. My birthday party', link: 'update' },
    { variant: 'warning', title: 'Warning!', message: 'Why you did it to me! Check this out.' },
    { variant: 'danger', title: 'Error!', message: 'Something Went wrong.', link: 'Click here for details.' },
    { variant: 'dark', title: 'Error!', message: 'Something Went wrong.', link: 'Click here for details.' },
    { variant: 'light', title: 'Error!', message: 'Something Went wrong.', link: 'Click here for details.' },
]

const MESSAGE_ROWS = [
    { variant: 'primary' }, { variant: 'secondary' }, { variant: 'success' },
    { variant: 'info' }, { variant: 'warning' }, { variant: 'danger' }, { variant: 'dark' },
]

const MESSAGE_TITLE = 'Notifications'
const MESSAGE_BODY = 'Cras sit amet nibh libero, in gravida nulla. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'

const INLINE_ROWS = [
    { variant: 'primary' }, { variant: 'secondary' }, { variant: 'warning' }, { variant: 'dark' },
]
const INLINE_TITLE = 'Vampires The Romantic Ideology Behind Them'
const INLINE_BODY = 'The following article covers a topic that has recently moved to center-stage as it seems that way.'
const INLINE_DANGER = { title: 'Religion And Science', body: 'What is the loop of Creation? How is there something from nothing? In spite of the fact.' }

const useDismissible = (rows) => {
    const [hidden, setHidden] = useState([])
    const visible = rows.filter((r) => !hidden.includes(r.variant))
    const dismiss = (variant) => setHidden((prev) => [...prev, variant])
    return [visible, dismiss]
}

const Alert = () => {
    const [basicRows, dismissBasic] = useDismissible(VARIANT_ROWS)
    const [solidColorRows, dismissSolidColor] = useDismissible(VARIANT_ROWS)
    const [dismissableRows, dismissDismissable] = useDismissible(PLAIN_ROWS)
    const [altRows, dismissAlt] = useDismissible(PLAIN_ROWS)
    const [solidAltRows, dismissSolidAlt] = useDismissible(VARIANT_ROWS)
    const [solidDismissRows, dismissSolidDismiss] = useDismissible(VARIANT_ROWS)
    const [linkRows, dismissLink] = useDismissible(LINK_ROWS)
    const [linkSolidRows, dismissLinkSolid] = useDismissible(LINK_ROWS)
    const [iconLeftRows, dismissIconLeft] = useDismissible(VARIANT_ROWS)
    const [outlineRows, dismissOutline] = useDismissible(VARIANT_ROWS)
    const [msgRows, dismissMsg] = useDismissible(MESSAGE_ROWS)
    const [msgSolidRows, dismissMsgSolid] = useDismissible(MESSAGE_ROWS)
    const [socialRows, setSocialRows] = useState(['facebook', 'twitter', 'linkedin', 'googleplus'])

    const dismissSocial = (key) => setSocialRows((prev) => prev.filter((k) => k !== key))

    const socialData = {
        facebook: { icon: RiFacebookFill, brand: '#3b5998', iconBg: '#2d4373', title: 'Facebook', message: 'Cras sit amet nibh libero, in gravida nulla. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.' },
        twitter: { icon: RiTwitterFill, brand: '#1da1f2', iconBg: '#0d8bd9', title: 'Twitter', message: 'Cras sit amet nibh libero, in gravida nulla. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.' },
        linkedin: { icon: RiLinkedinFill, brand: '#0077b5', iconBg: '#005f92', title: 'LinkedIn', message: 'Cras sit amet nibh libero, in gravida nulla. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.' },
        googleplus: { icon: RiGoogleFill, brand: '#dd4b39', iconBg: '#c23321', title: 'Google Plus', message: 'Cras sit amet nibh libero, in gravida nulla. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.' },
    }

    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Bootstrap" grandChildTitle="Alert" />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>

                    {/* 1. Basic Alerts */}
                    <AccordionCard title="Basic Alerts" description="Bootstrap default style">
                        {basicRows.map((r) => (
                            <AlertItem key={r.variant} {...r} dismissible onDismiss={() => dismissBasic(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 2. Solid Color Alerts */}
                    <AccordionCard title="Solid Color Alerts" description="add {{-solid}} class to change the solid color.">
                        {solidColorRows.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' dismissible onDismiss={() => dismissSolidColor(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 3. Square Alerts - no dismiss cross */}
                    <AccordionCard title="Square Alerts" description="add {{alert-square}} class to change the solid color.">
                        {VARIANT_ROWS.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' shape='square' />
                        ))}
                    </AccordionCard>

                    {/* 4. Rounded Alerts - no dismiss cross */}
                    <AccordionCard title="Rounded Alerts" description="add {{alert-rounded}} class to change the solid color.">
                        {VARIANT_ROWS.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' shape='pill' />
                        ))}
                    </AccordionCard>

                    {/* 5. Dismissable Alerts - plain, no left icon */}
                    <AccordionCard title="Dismissable Alerts" description="Bootstrap default style">
                        {dismissableRows.map((r) => (
                            <AlertItem key={r.variant} {...r} dismissible onDismiss={() => dismissDismissable(r.variant)} />
                        ))}
                        {dismissableRows.length === 0 && <p className='text-gray-400 text-[13px]'>All alerts dismissed.</p>}
                    </AccordionCard>

                    {/* 6. Alerts Alt - plain, no left icon */}
                    <AccordionCard title="Alerts Alt" description="add {{-alt}} class to change the solid color.">
                        {altRows.map((r) => (
                            <AlertItem key={r.variant} {...r} dismissible onDismiss={() => dismissAlt(r.variant)} />
                        ))}
                        {altRows.length === 0 && <p className='text-gray-400 text-[13px]'>All alerts dismissed.</p>}
                    </AccordionCard>

                    {/* 7. Solid Alt */}
                    <AccordionCard title="Solid Alt" description="add {{alert-alt-solid}} class to change the solid color.">
                        {solidAltRows.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' dismissible onDismiss={() => dismissSolidAlt(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 8. Dismissable With Solid */}
                    <AccordionCard title="Dismissable With Solid" description="add {{-solid}} class to change the solid color.">
                        {solidDismissRows.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' dismissible onDismiss={() => dismissSolidDismiss(r.variant)} />
                        ))}
                        {solidDismissRows.length === 0 && <p className='text-gray-400 text-[13px]'>All alerts dismissed.</p>}
                    </AccordionCard>

                    {/* 9. Alert With Link */}
                    <AccordionCard title="Alert With Link" description="Bootstrap default style">
                        {linkRows.map((r) => (
                            <AlertItem key={r.variant} variant={r.variant} title={r.title} message={r.message} link={r.link} dismissible onDismiss={() => dismissLink(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 10. Alert With Link And Solid Color */}
                    <AccordionCard title="Alert With Link And Solid Color" description="add {{-solid}} class to change the solid color.">
                        {linkSolidRows.map((r) => (
                            <AlertItem key={r.variant} variant={r.variant} title={r.title} message={r.message} link={r.link} style='solid' dismissible onDismiss={() => dismissLinkSolid(r.variant)} />
                        ))}
                    </AccordionCard>

                </div>

                {/* 11. Inline Notifications - no dismiss cross, own full-width row */}
                <AccordionCard title="Inline Notifications" description="Default inline notification" listClassName='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    {INLINE_ROWS.map((r) => (
                        <AlertInlineNotification key={r.variant} variant={r.variant} title={INLINE_TITLE} message={INLINE_BODY} />
                    ))}
                    <AlertInlineNotification variant='danger' title={INLINE_DANGER.title} message={INLINE_DANGER.body} />
                    <AlertInlineNotification variant='dark' title={INLINE_DANGER.title} message={INLINE_DANGER.body} />
                </AccordionCard>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>

                    {/* 12. Alert Icon Left */}
                    <AccordionCard title="Alert Icon Left" description="add {{alert-right-icon}} to change the style">
                        {iconLeftRows.map((r) => (
                            <AlertItem key={r.variant} {...r} style='solid' dismissible onDismiss={() => dismissIconLeft(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 13. Alert Outline */}
                    <AccordionCard title="Alert Outline" description="add {{alert-outline primary,secondary,success...}} to change the style">
                        {outlineRows.map((r) => (
                            <AlertItem key={r.variant} variant={r.variant} title={r.title} message={r.message} style='outline' dismissible onDismiss={() => dismissOutline(r.variant)} />
                        ))}
                    </AccordionCard>

                </div>

                {/* 14. Alert Social - own full-width row, 2 items per row */}
                <AccordionCard title="Alert Social" description="add {{alert-social facebook, twitter, linkedin, google-plus}} to change the style" listClassName='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
                    {socialRows.map((key) => (
                        <AlertSocialCard key={key} {...socialData[key]} onDismiss={() => dismissSocial(key)} />
                    ))}
                </AccordionCard>

                <div className='flex flex-col gap-3 my-4'>

                    {/* 15. Message Alert */}
                    <AccordionCard title="Message Alert" description="Bootstrap default style" listClassName='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {msgRows.map((r) => (
                            <AlertMessageCard key={r.variant} variant={r.variant} title={MESSAGE_TITLE} message={MESSAGE_BODY} onDismiss={() => dismissMsg(r.variant)} />
                        ))}
                    </AccordionCard>

                    {/* 16. Message Alert With Solid Color */}
                    <AccordionCard title="Message Alert With Solid Color" description="add {{-solid}} to change the style" listClassName='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {msgSolidRows.map((r) => (
                            <AlertMessageCard key={r.variant} variant={r.variant} solid title={MESSAGE_TITLE} message={MESSAGE_BODY} onDismiss={() => dismissMsgSolid(r.variant)} />
                        ))}
                    </AccordionCard>

                </div>

                {/* 17. Alert Left Icon Big - own full-width row, 2 items per row */}
                <AccordionCard title="Alert Left Icon Big" description="add {{alert-left-icon-big}} to change the style" listClassName='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
                    <AlertBigIcon variant='primary' icon={RiMailOpenLine} title='Welcome to your account, Dear user!' message='Please confirm your email address to get started.' />
                    <AlertBigIcon variant='warning' icon={RiTimeLine} title='Pending!' message='Your action is pending.' />
                    <AlertBigIcon variant='success' icon={RiCheckboxCircleLine} title='Congratulations!' message='Your have completed a request successfully.' />
                    <AlertBigIcon variant='danger' icon={RiErrorWarningFill} title='Loading failed!' message='Again upload your server.' />
                </AccordionCard>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default Alert
