'use client'

import Image from "next/image";
import { useTranslations } from 'next-intl';

export const Misson = ({ data }: { data: any }) => { 
  const t = useTranslations();

  if (!data) return <div></div>;

  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
      <div className="grid lg:grid-cols-2 place-items-center gap-11">
        <div>
          <h2 className="text-[32px] font-[600] md:text-5xl md:py-[40px] md:font-bold mb-4 text-[#BE5C59]">
            {data?.name}
          </h2>
          <p className="text-[#514F4F] text-[18px]" dangerouslySetInnerHTML={{__html: data?.description}}/>
        </div>

        <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
          <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
            <div className="relative w-[310px] z-[2] h-[310px] rounded-[32px] xl:w-[530px] xl:h-[530px] drop-shadow-2xl overflow-hidden">
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
            <div className="z-0 w-[310px] h-[310px] bg-[#E5BEBD] xl:w-[530px] xl:h-[530px] rounded-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
