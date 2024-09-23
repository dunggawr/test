"use client"

import clsx from "clsx";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { useGetAllCategory } from "@/schema/services/allcategory";
import { useAppDispatch, useAppSelector } from '@/components/hooks/useRedux';
import { setActiveNew } from '@/lib/stores/appSlice';

export const TabsBar = () => {
  const { data: category, isLoading } = useGetAllCategory();
  const dispatch = useAppDispatch();
  const news_type_id = useAppSelector(state => state.activeNew);
  const router = useRouter()
  const t = useTranslations()
  if (isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]"></div>

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]">
      <div className="justify-between block mb-5 lg:flex">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[800px]">
          <div
            onClick={() => {
              dispatch(setActiveNew(0));
              router.push(`/news&blog`)
            }}
            className={news_type_id === 0 ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}
          >
            {t("all")}
          </div>
          {category.map((item: any) => (
            <div
              onClick={() => {
                dispatch(setActiveNew(item.id));
                router.push(`/news&blog`)
              }}
              key={item.order}
              className={news_type_id === item.id ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}>
              {item?.name}
            </div>
          ))}
        </div>
        {/* mobile */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true
          }}
          className="hidden [@media(max-width:1000px)]:flex grid-col-5 w-full mb-4"
        >
          <CarouselContent>
            <div
              onClick={() => {
                dispatch(setActiveNew(0));
                router.push(`/news&blog`)
              }}
              className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", news_type_id === 0 ? "font-bold text-[#BE5C59]" : "hover:underline"
              )}>
              {t("all")}
            </div>
            {category.map((item: any) => (
              <div
                onClick={() => {
                  dispatch(setActiveNew(item.id));
                  router.push(`/news&blog`)
                }}
                key={item.order}
                className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", news_type_id === item.id ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}>
                {item?.name}
              </div>
            ))}
          </CarouselContent>
        </Carousel>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className="bg-white flex border-solid border-[#D0D5DD] border-[1px] p-2 rounded-xl w-full lg:w-[300px]"
        >
          <input
            placeholder={t("search")}
            className="bg-white outline-none w-full text-[#000F30] text-base"
          />
          <button onClick={() => {
            router.push("/news&blog")
          }}>
            <Search color="#000F30" strokeWidth={1.5} />
          </button>
        </form>

      </div>
      <Separator className="flex bg-[#D0D5DD]" />
    </div>
  );
};
