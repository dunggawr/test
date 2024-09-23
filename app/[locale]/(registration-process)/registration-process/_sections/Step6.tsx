'use client';

import { Section } from '@/app/[locale]/type';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from "next/image";

export const Step6: React.FC<{ data: Section }> = ({data}) => {
    const t = useTranslations("register");

    return (
        <section className="flex py-[60px] px-[16px] md:px-[106px] bg-white justify-center">
            <div className="flex flex-col lg:flex-row place-items-center gap-11 max-w-[1228px]">
                <div className="flex flex-col items-start w-full lg:w-[500px]">
                    <h2 className="text-[32px] leading-[52px] lg:text-[44px] lg:leading-[66px] font-bold md:py-[35px] md:font-bold text-black">
                        {data?.name}
                    </h2>
                    <p className="text-[#514F4F] text-[20px]  font-[400px] leading-8"
                        dangerouslySetInnerHTML={{__html:data?.description}}
                    />
                </div>
                <div className="flex relative w-[280px] h-[290px] xl:w-[557px] xl:h-[567px]">
                    <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
                        <div className="relative w-[270px] z-[2] h-[270px] xl:w-[530px] xl:h-[530px] rounded-[32px] drop-shadow-2xl overflow-hidden">
                            <Image
                                fill
                                style={{ objectFit: "cover" }}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}` as string}
                                alt={'step6'}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex absolute top-0 right-0 w-full h-full justify-start items-end mr-2.5">
                        <div className="z-0 w-[270px] h-[270px] xl:w-[530px] xl:h-[530px] bg-[#E5BEBD] rounded-[32px]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
