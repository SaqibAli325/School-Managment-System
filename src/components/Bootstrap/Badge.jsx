import Navbar from '../Navbar.jsx'
import Sidebar from '../Sidebar'
import PageContainer from '../Layout/PageContainer.jsx'
import Header from '../Header'
import AccordionCard from './AccordionCard.jsx'
import BadgeItem from './BadgeItem.jsx'

const VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const LABELS = { primary: 'Primary', secondary: 'Secondary', success: 'Success', danger: 'Danger', warning: 'Warning', info: 'Info', light: 'Light', dark: 'Dark' }
const NUM_VARIANTS = ['primary', 'danger', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const SIZE_STEPS = [
    { size: 'xs', variant: 'primary', label: 'xs' },
    { size: 'sm', variant: 'danger', label: 'sm' },
    { size: 'md', variant: 'success', label: 'md' },
    { size: 'lg', variant: 'danger', label: 'lg' },
    { size: 'xl', variant: 'warning', label: 'xl' },
]


const Badge = () => {
    return (
        <div className='w-screen h-screen bg-[#F2F2F3]'>
            <Navbar />
            <Sidebar />

            <PageContainer>

                <Header parentTitle="Hi, welcome back!" subtitle="Bootstrap" childTitle="Bootstrap" grandChildTitle="Badge" />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>

                    {/* 1. Badges Size */}
                    <AccordionCard title="Badges Size" description="Default Bootstrap Badges" listClassName='flex flex-wrap items-center gap-3'>
                        <BadgeItem variant='primary' style='light' size='sm'>Primary</BadgeItem>
                        <BadgeItem variant='primary' style='light' size='md'>Primary</BadgeItem>
                        <BadgeItem variant='secondary' style='light' size='lg'>Secondary</BadgeItem>
                        <BadgeItem variant='danger' style='light' size='xl'>Danger</BadgeItem>
                        <BadgeItem variant='warning' style='light' size='xl'>Warning</BadgeItem>
                    </AccordionCard>

                    {/* 2. Badges Light */}
                    <AccordionCard title="Badges Light" description="Default Bootstrap Badges" listClassName='flex flex-col gap-3'>
                        <div className='flex flex-wrap items-center gap-2'>
                            {VARIANTS.map((v) => (
                                <BadgeItem key={v} variant={v} style='light'>{LABELS[v]}</BadgeItem>
                            ))}
                        </div>

                        <div className='flex flex-wrap items-center gap-2'>
                            {NUM_VARIANTS.map((v, i) => (
                                <BadgeItem key={i} variant={v} style={v === 'danger' && i === 1 ? 'solid' : 'light'} shape='circle' size='md' className='w-6 h-6'>{i + 1}</BadgeItem>
                            ))}
                        </div>
                    </AccordionCard>

                    {/* 3. Badges */}
                    <AccordionCard title="Badges" description="Default Bootstrap Badges" listClassName='flex flex-wrap items-center gap-2'>
                        {VARIANTS.map((v) => (
                            <BadgeItem key={v} variant={v} style='solid'>{LABELS[v]}</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 4. Pill Badge */}
                    <AccordionCard title="Pill Badge" description="add {{.badge-pill}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {VARIANTS.map((v) => (
                            <BadgeItem key={v} variant={v} style='solid' shape='pill'>Pill badge</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 5. Link Badge */}
                    <AccordionCard title="Link Badge" description="Link badge add in anchor tag" listClassName='flex flex-wrap items-center gap-2'>
                        {VARIANTS.map((v) => (
                            <BadgeItem key={v} as='a' variant={v} style='solid'>Links</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 6. Rounded Badge */}
                    <AccordionCard title="Rounded Badge" description="add {{.badge-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {VARIANTS.map((v) => (
                            <BadgeItem key={v} variant={v} style='solid' shape='pill'>Rounded</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 7. Rounded Outline Badge */}
                    <AccordionCard title="Rounded Outline Badge" description="add {{.badge-rounded}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {VARIANTS.map((v) => (
                            <BadgeItem key={v} variant={v} style='outline' shape='pill'>Rounded</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 8. Outline Circle Badge */}
                    <AccordionCard title="Outline Circle Badge" description="add {{.badge-circle}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {NUM_VARIANTS.map((v, i) => (
                            <BadgeItem key={i} variant={v} style='outline' shape='circle' size='sm' className='w-7 h-7'>{i + 1}</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 9. Circle Badge */}
                    <AccordionCard title="Circle Badge" description="add {{.badge-circle}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {NUM_VARIANTS.map((v, i) => (
                            <BadgeItem key={i} variant={v} style='solid' shape='circle' size='sm' className='w-7 h-7'>{i + 1}</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 10. Outline Badge */}
                    <AccordionCard title="Outline Badge" description="Default bootstrap outline baadge" listClassName='flex flex-wrap items-center gap-2'>
                        {NUM_VARIANTS.map((v, i) => (
                            <BadgeItem key={i} variant={v} style='outline' shape='circle' size='sm' className='w-7 h-7'>{i + 1}</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 11. Number Badge */}
                    <AccordionCard title="Number Badge" description="Default bootstrap outline baadge" listClassName='flex flex-wrap items-center gap-2'>
                        {NUM_VARIANTS.map((v, i) => (
                            <BadgeItem key={i} variant={v} style='solid' size='md' className='w-7 h-7'>{i + 1}</BadgeItem>
                        ))}
                    </AccordionCard>

                    {/* 12. Badge Sizes */}
                    <AccordionCard title="Badge Sizes" description="add {{.badge-xs}} {{.badge-sm}} {{.badge-md}} {{.badge-lg}} {{.badge-xl}} to change the style" listClassName='flex flex-wrap items-center gap-2'>
                        {SIZE_STEPS.map((s) => (
                            <BadgeItem key={s.size} variant={s.variant} style='solid' size={s.size}>{s.label}</BadgeItem>
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

export default Badge
