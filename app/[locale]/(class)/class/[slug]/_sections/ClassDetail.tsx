'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ClassData } from '@/app/[locale]/type';

export const ClassDetail: React.FC<ClassData> = ({ data_detail }) => {
  const t = useTranslations();
  return (
    <React.Fragment>
      <div className={"w-full flex justify-center text-[#BE5C59] font-[700] text-[16px]"}>
        {t('class.label.title')}
      </div>
      <div className={"w-full flex justify-center text-[#000F30] font-[700] text-[48px] mb-4"}>
        {data_detail?.name}
      </div>
      <div className={"relative w-full h-[428px] md:h-[740px] mb-4"}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data_detail?.image}` as string}
          alt="image about class"
          fill
          quality={100}
          style={{
            objectFit: "cover"
          }}
          loading={'eager'}
          priority={true}
          className={"rounded-[32px]"}
        />
      </div>
      <div className="font-sans text-black md:py-[40px] class-content">
        <div className="text-container" dangerouslySetInnerHTML={{ __html: data_detail?.content || '' }} />
      </div>
    </React.Fragment>

  );
};

export default ClassDetail;
