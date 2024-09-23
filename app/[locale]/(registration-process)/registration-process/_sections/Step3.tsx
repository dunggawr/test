'use client'

import Image from "next/image";
import { useTranslations } from 'next-intl';

export const Step3 = ({ data }: { data: any }) => { 
  const t = useTranslations();

  if (!data) return <div></div>;

  return (
    <section className="flex py-[60px] px-[16px] md:px-[106px] bg-white justify-center">
      <div className="flex flex-col lg:flex-row place-items-center gap-11 max-w-[1228px] ">
        <div className="w-full lg:w-[393px]">
          <h2 className="text-[32px] leading-[52px] lg:text-[44px] lg:leading-[66px] font-bold md:py-[35px] md:font-bold text-black">
            {data?.name}
          </h2>
          <p className="text-[#514F4F] text-[20px] leading-8" dangerouslySetInnerHTML={{__html: data?.description}}/>
        </div>

        <div className="flex relative w-[280px] h-[290px] xl:w-[557px] xl:h-[567px]">
          <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
            <div className="relative w-[270px] z-[2] h-[270px] rounded-[32px] xl:w-[530px] xl:h-[530px] drop-shadow-2xl overflow-hidden">
              <Image
                fill
                style={{
                  objectFit: "cover",
                }}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}` as string} 
                alt={'image about mission'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="flex absolute top-0 right-0 w-full h-full justify-start items-end mr-2.5">
            <div className="z-0 w-[270px] h-[270px] bg-[#E5BEBD] xl:w-[530px] xl:h-[530px] rounded-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
