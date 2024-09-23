'use client';

import clsx from "clsx";
import { useTranslations } from 'next-intl';
import { useGetComponent } from "@/schema/services/component";

export const BrandStory = ({ data }: { data: any }) => {
  const t = useTranslations();
  const { data: components, isLoading } = useGetComponent({ section_id: data?.id, queryKey: 'brandstory' });

  if (!data || isLoading) return <div></div>;

  return (
    <div className="px-4 py-10 font-sans bg-[#FDF6EB] md:px-[106px] md:py-[40px]">
      <h1 className="text-center leading-[76px] mb-0 font-bold text-[#BE5C59] text-3xl md:text-[48px] md:font-bold">
        {data?.name}
      </h1>
      <div className="flex justify-center mb-10">
        <p className="text-[#514F4f] text-[20px] leading-8 font-normal text-center md:text-[20px] md:w-[1228px] h-auto md:h-[96px] py-5" dangerouslySetInnerHTML={{__html:data?.description}}
        />
      </div>

      <div className="relative w-full flex justify-center top-20">
        <div className="relative w-full max-w-[920px]">
          {components && Array.isArray(components) && components?.map((item: any, index: number) => (
            <div key={item.id} className="flex items-start relative">
              {index % 2 === 0 ? (
                <>
                  <div
                    className={clsx(
                      "w-1/2 text-left pr-5 relative border-solid border-r-[2px] border-[#E5BEBD] transform translate-x-[1px]",
                      index === components?.length - 1 && "border-r-0"
                    )}
                  >
                    <p className="text-[#514F4f] font-normal leading-6 md:text-[16px] mb-20 translate-x-0 md:translate-x-[-20px]"
                    dangerouslySetInnerHTML={{__html: item?.content}}
                    />
                  </div>
                  <div className="w-1/2 text-center flex items-center relative justify-start">
                    <div className="w-fit flex items-start relative -translate-x-[10px] z-[2]">
                      <div className='flex items-center'>
                        <div
                          className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] rounded-full w-5 h-5 translate-y-[-10px]"
                        ></div>
                        <hr
                          className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5 translate-y-[-10px]"
                        />
                      </div>
                      <p className="font-semibold text-left text-[24px] md:text-[32px] text-nowrap text-[#BE5C59] leading-[52px] bg-[#FDF6EB] w-[88px] sm:w-auto md:translate-y-[-19px] md:translate-x-[20px] translate-x-1 translate-y-[-26px]"> {item?.title}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 text-center flex items-center relative justify-end">
                    <div className="w-fit flex items-start relative translate-x-[10px] z-[2]">
                      <p
                        className="font-semibold text-center mr-2 w-[120px] sm:w-auto text-[32px] text-[#BE5C59] md:text-center leading-[52px] bg-[#FDF6EB] translate-x-[25px] translate-y-[-18px] md:translate-x-[-15px] md:translate-y-[-18px]"
                      >
                        {item?.title}
                      </p>
                      <div className='flex items-center'>
                        <hr
                          className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5 translate-y-[-10px]"
                        />
                        <div
                          className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] rounded-full w-5 h-5 translate-y-[-10px]"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "w-1/2 text-left pl-5 border-solid border-[#E5BEBD] transform -translate-x-[1px]",
                      index < components?.length - 1 && "border-l-2"
                    )}
                  >
                    <p className="text-[#514F4f] font-normal leading-6 md:text-[16px] mb-20 translate-x-[0px] md:translate-x-[20px]"
                    dangerouslySetInnerHTML={{__html: item?.content}}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
