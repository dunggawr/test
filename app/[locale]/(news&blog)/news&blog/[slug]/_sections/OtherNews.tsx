import { useTranslations } from "next-intl"

import { SmNews } from "@/components/ui/smnews"

import { useGetAllCategory } from "@/schema/services/allcategory"
import { useGetRelated } from "@/schema/services/related"

export const OtherNews = ({ id }: { id: number }) => {
    const t = useTranslations()
    const { data: category } = useGetAllCategory()
    const { data: related, isLoading } = useGetRelated({ category_id: id, id: id })
    if (isLoading) return <section className="px-[16px] md:px-[80px] bg-white"></section>

    return (
        <section className="px-[16px] md:px-[80px] bg-white">
            <h2 className="text-[32px] text-black font-semibold mb-8">{t("related")}</h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 place-items-top">
                {related.map((item: any, index: number) => (
                    <div key={index}>
                        <SmNews title={item.title} description={item.description} image={item.image} created_at={item.created_at} read_time={item.read_time} tag={category[item.news_category_id]?.description} href={item.slug} />
                    </div>
                ))}
            </div>
        </section>
    )
}
