import { useTranslations } from "next-intl";
import { SmNews } from "@/components/ui/smnews";
import { useGetAllCategory } from "@/schema/services/allcategory";
import { useAppSelector } from "@/components/hooks/useRedux";
import { Slug } from "@/app/[locale]/type";

export const LiNews = ({ data }: { data: Slug[] }) => {
    const t = useTranslations()
    const news_type_id = useAppSelector(state => state.activeNew)
    const filterLiNews = data.filter((item) => (item.news_category_id === news_type_id) || news_type_id === 0);
    const { data: category, isLoading } = useGetAllCategory()
    if (isLoading || !category) return <></>

    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 place-items-top">
                {filterLiNews.length > 0
                    ? filterLiNews.map(({title, description, image, read_time, created_at, news_category_id, slug}, index: number) => (
                        <div key={index} className="w-full">
                            <SmNews title={title} description={description} image={image} read_time={read_time} created_at={created_at} tag={category[news_category_id - 1].description} href={slug} />
                        </div>
                    ))
                    : <div className="">{t("notFound")}</div>
                }
            </div>
        </section>
    );
}
