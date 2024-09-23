import Image from 'next/image'
import { CircleArrowRight } from 'lucide-react'

import { useRouter } from '@/navigation' 
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { ListNews } from '@/app/[locale]/type'

export const NewsBig = ({ tag, image, description, created_at, read_time, title, href }: ListNews) => {
    const t = useTranslations()
    const router = useRouter()

    const [year, month, day] = created_at.split(' ')[0].split('-');
    const publishInfor = `${day}/${month}/${year} - ${read_time} ${t("readtime")}`

    return (
        <section className='bg-white px-[16px] md:px-[80px] pt-3 md:pt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:gap-0 lg:gap-x-9'>
                <div className='relative w-full h-[200px] lg:h-[285px] xl:h-[402px] 2xl:h-[500px] rounded-xl overflow-hidden'>
                    <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}` as string}
                        alt="image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className='w-full flex flex-col gap-3 xl:gap-[20px] text-black'>
                    <div className='flex items-center justify-between w-full'>
                        <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal'
                               dangerouslySetInnerHTML={{__html: tag || ''}}
                        ></Badge>
                        <div className='text-base font-normal' dangerouslySetInnerHTML={{__html: publishInfor || ''}}></div>
                    </div>

                    <div className='lg:text-[32px] text-2xl font-semibold leading-9 lg:leading-[52px]' dangerouslySetInnerHTML={{__html: title || ''}}>
                    </div>

                    <div className='text-base font-normal text-[#514F4F]'>
                        <div className="text-container" dangerouslySetInnerHTML={{__html: description || ''}}/>
                    </div>

                    <div onClick={() => router.push(`/news&blog/${href}`)} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] lg:text-2xl px-0 group/arrow'>
                        {t("read")}
                        <CircleArrowRight strokeWidth={1.5} size={20} className='transition-transform group-hover/arrow:translate-x-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}
