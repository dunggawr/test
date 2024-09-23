import Image from 'next/image'
import { CircleArrowRight } from 'lucide-react'

import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { ListNews } from '@/app/[locale]/type'
import { Badge } from '@/components/ui/badge'

export const SmNews = ({ image, created_at, read_time, title, tag, description, href }: ListNews) => {
    const t = useTranslations()
    const router = useRouter()
    const [year, month, day] = created_at.split(' ')[0].split('-');
    const publishInfor = `${day}/${month}/${year} - ${read_time} ${t("readtime")}`
    return (
        <div className='flex flex-col w-full gap-6 h-full'>
            <div className='relative w-full h-[200px] 2xl:h-[250px] rounded-xl overflow-hidden'>
                <Image
                    fill
                    style={{ objectFit: "cover" }}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}` as string}
                    alt="image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className='w-full flex flex-col gap-3 justify-between text-black flex-grow'>
                <div className='w-full flex justify-between items-center'>
                    <Badge variant={'secondary'} className='flex justify-center p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal min-w-[74px] 2xl:text-base'
                           dangerouslySetInnerHTML={{__html: tag || ''}}></Badge>
                    <div className='text-base font-normal 2xl:text-lg' dangerouslySetInnerHTML={{__html: publishInfor || ''}}></div>
                </div>

                <div className='text-2xl font-semibold leading-9 2xl:text-3xl' dangerouslySetInnerHTML={{__html: title || ''}}>
                </div>

                <div className='text-base font-normal text-[#514F4F] 2xl:text-lg'>
                    <div className="text-container" dangerouslySetInnerHTML={{__html: description || ''}}/>
                </div>

                <div onClick={() => router.push(`/news&blog/${href}`)} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] px-0 group/arrow 2xl:text-3xl'>
                    {t("read")}
                    <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform' />
                </div>
            </div>
        </div>
    )
}
