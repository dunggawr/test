"use client"

import { useGetFeedback } from '@/schema/services/feedback'
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { Section } from '@/app/[locale]/type'

export const Feedback: React.FC<{ data: Section }> = ({data}) => {
    const { data: feedback, isLoading } = useGetFeedback()

    if (isLoading) return <section className=' px-[16px] md:px-[80px] h-[400px] py-12 md:py-16 bg-white'></section>

    const testimonials_1 = feedback?.filter((item: any, index: number) => index < feedback.length / 2)
    const testimonials_2 = feedback?.filter((item: any, index: number) => index >= feedback.length / 2)

    return (
        <section className='flex flex-col lg:flex-row justify-between px-[16px] md:px-[80px] py-12 md:py-16 bg-white'>
            <div className='lg:w-[360px] xl:w-[460px] 2xl:w-[650px]'>
                <h2 className='text-base text-[#BE5C59] font-bold mb-6'>{data?.name}</h2>
                <h2 className='text-[32px] font-[600] xl:text-[48px] lg:font-bold text-[#000F30] leading-relaxed'>
                    <div className="text-container" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
                </h2>
            </div>

            {/* desktop */}
            <div className='hidden lg:grid grid-cols-2 place-items-center bg-[#FDF6EB] shadow-xl rounded-2xl lg:w-[550px] lg:h-[514px] xl:w-[688px] xl:h-[644px] '>
                <EmblaCarousel info_testimonials={testimonials_1} options={{ axis: 'y', loop: true, }} />
                <EmblaCarousel info_testimonials={testimonials_2} options={{ axis: 'y', loop: true }} scrollPrev={true} />
            </div>

            {/* mobile */}
            <div className='grid lg:hidden grid-row-2 place-items-center bg-[#FDF6EB] gap-4 rounded-2xl w-full h-[680px] py-4'>
                <EmblaCarousel info_testimonials={testimonials_1} options={{ axis: 'x', loop: true, }} />
                <EmblaCarousel info_testimonials={testimonials_2} options={{ axis: 'x', loop: true }} scrollPrev={true} />
            </div>
        </section>
    )
}