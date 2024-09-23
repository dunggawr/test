'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const ClassEmpty = () => {
  const t = useTranslations();
  const logo = `/images/logo.png`;

  return (
    <React.Fragment>
      <div className={`relative w-full h-[428px] md:h-[740px]  flex justify-center items-center mt-[-20px] md:mt-[-200px] mb-[-30px] md:mb-[-200px]`} >
        <Image
          src={logo}
          alt="image about class"
          width={360}
          height={360}
          style={{
            objectFit: "cover"
          }}
          priority={true}
          className="rounded-[32px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="font-sans text-black md:py-[40px] class-content">
        <div
          className="text-center leading-[52px] text-[32px] font-semibold text-[#000F30] md:text-[48px] md:leading-[76px] md:font-bold p-3 md:p-0">
          {t('class.label.isdescription')}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClassEmpty;
