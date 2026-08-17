import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Header from '../Header'
import PageContainer from '../Layout/PageContainer'
import SlideCard from './Carousel/SlideCard'
import slidesData from './Carousel/SlideData'

const Carousel = () => {
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle='Bootstrap' grandChildTitle='Carousel' />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
                    {slidesData.map((slide) => (
                        <SlideCard key={slide.id} id={slide.id} title={slide.title} images={slide.images} />
                    ))}
                </div>
            </PageContainer>
        </div>
    )
}

export default Carousel