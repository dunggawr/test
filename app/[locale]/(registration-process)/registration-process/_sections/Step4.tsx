'use client';

import { Section } from '@/app/[locale]/type';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useGetComponent } from "@/schema/services/component";

export const Step4: React.FC<{ data: Section }> = ({ data }) => {
    const t = useTranslations("register");
    const { data: components, isLoading } = useGetComponent({ section_id: data?.id, queryKey: 'step4' });

    if (!data || isLoading) return <div></div>; 

    return (
        <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
            <div className="text-[32px] leading-[52px] lg:text-[44px] lg:leading-[66px] font-bold md:py-[35px] md:font-bold text-black">
                {data?.name}
            </div>
            <div className="w-full flex justify-center text-[#514F4F] text-[20px] font-[400] leading-8">
                <div className="text-container" dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
            </div>
            <div className="font-sans mt-0 md:mt-[50px] md:mb-[100px] md:py-[20px] custom-table">
                {components && Array.isArray(components) ? components.map((component, index) => (
                    <div key={index} className="mb-4">
                        <div className="text-[20px] md:text-[24px] font-[600] md:py-[12px] md:font-bold text-[#000F30] text-center p-3">
                            {component?.title}
                        </div>
                        <div className="text-container text-[16px] md:text-[18px] leading-6 " dangerouslySetInnerHTML={{ __html: component?.content || '' }} />
                    </div>
                )) : null}
            </div>
            <div className="flex justify-center items-center rounded-lg overflow-hidden mt-0 md:mt-[0px]">
                <video className="w-[900px] h-[450px]" controls>                    
                    <source src="" type="video/mp4" />                 
                </video>
            </div>
        </section>
    );
};
