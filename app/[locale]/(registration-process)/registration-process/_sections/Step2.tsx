"use client"

import { Section } from '@/app/[locale]/type'
import { Button } from '@/components/ui/button'
import { useGetComponent } from '@/schema/services/component'
import { useTranslations } from 'next-intl'
import React from 'react'

interface lv{
    title: string;
    content: string;
}

export const Step2: React.FC<{ data: Section }> = ({data}) => {
    const t = useTranslations("register")
    const items = useGetComponent({ queryKey: data?.name, section_id: data?.id })
    
    return (
        <section className='flex flex-col px-[16px] items-center py-[40px] lg:px-[80px] gap-6 bg-white'>
            <div className='text-[32px] leading-[52px] lg:text-[44px] lg:leading-[66px] font-bold md:py-[35px] md:font-bold text-black text-center'>{data?.name}</div>
            <Button 
                className='bg-[#BE5C59] font-bold text-base w-[243px] h-[56px] rounded-2xl text-white'
                variant={'destructive'}
            >
                {t("button2")}
            </Button>
            <div className="ul text-[#514F4F] text-[20px] leading-8 lg:w-[900px]" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
            <div className='grid lg:grid-cols-3 lg:w-[900px] gap-6'>
                {items?.data && items?.data.map((item: lv) => (
                    <div key={item.title}>
                        <div className='text-[24px] leading-9 font-semibold text-[#BE5C59]'>{item.title}</div>
                        <div className='ul text-[20px] leading-8 text-[#282B27]' dangerouslySetInnerHTML={{__html: item?.content || ''}}/>
                    </div>
                ))}
            </div>
        </section>
    )
}
