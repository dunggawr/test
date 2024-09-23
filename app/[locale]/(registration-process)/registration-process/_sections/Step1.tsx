import { Section } from '@/app/[locale]/type'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Step1: React.FC<{ data: Section }> = ({data}) => {
    const t = useTranslations("register")
    return (
        <section className='flex flex-col px-[16px] items-center py-[40px] lg:px-[80px] gap-6 bg-white'>
            <div className='text-[32px] leading-[52px] lg:text-[44px] lg:leading-[66px] font-bold md:py-[35px] md:font-bold text-black text-center'>{data?.name}</div>
            <Button 
                className='bg-[#BE5C59] font-bold text-base w-[243px] h-[56px] rounded-2xl'
                variant={'destructive'}
            >
                {t("button1")}
            </Button>
            <div className="custom-link text-[#514F4F] leading-[32px] w-full text-[20px]" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
        </section>
    )
}
