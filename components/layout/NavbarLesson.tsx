import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import { useGetNavbarLesson } from "@/schema/services/library/navbarLesson"; 
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from '@/components/hooks/useRedux';
import { setActiveLecture } from '@/lib/stores/appSlice';
import { Button } from '@/components/ui/button';

export const NavbarLesson = () => {
  const { data: lesson, isLoading } = useGetNavbarLesson();
  const dispatch = useAppDispatch();
  const lecture_type_id = useAppSelector(state => state.activeLecture);
  const t = useTranslations();

  if (isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]"></div>;

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">{t('Lecture')}</h1>
      <div className="lg:flex justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[760px]">
          {lesson && Array.isArray(lesson) && lesson?.map((item: any, index: number) => (
            <div key={item.order} className={index === 0 ? "flex-1 text-left" : "flex-1 mx-4 text-left"}>
              <Button
                onClick={() => {
                  dispatch(setActiveLecture(item?.id));
                }}
                className={clsx(
                  "text-sm px-2 font-bold bg-transparent", 
                  lecture_type_id === item?.id 
                    ? "text-[#BE5C59]" 
                    : "text-[#514F4F]"
                )}                
                style={{ boxShadow: "none", outline: "none", backgroundColor: "transparent" }}
              >
                {item?.name}
              </Button>
            </div>
          ))}
        </div>

        {/* mobile */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="hidden [@media(max-width:1000px)]:flex w-full mb-4"
        >
          <CarouselContent>
            {lesson && Array.isArray(lesson) && lesson?.map((item: any) => (
              <div key={item.order} className="flex-[0_0_auto] mx-1.5"> {/* Adjusted margin here */}
                <Button
                  onClick={() => {
                    dispatch(setActiveLecture(item.id));
                  }}
                  className={clsx(
                    "text-base bg-transparent", 
                    lecture_type_id === item?.id  
                      ? "font-bold text-[#BE5C59]" 
                      : "text-[#514F4F]"
                  )}
                  // Loại bỏ focus và hover
                  style={{ boxShadow: "none", outline: "none", backgroundColor: "transparent" }}
                >
                  {item?.name}
                </Button>
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator className="flex bg-[#D0D5DD] mt-5" />
    </div>
  );
};
