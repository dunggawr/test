"use client"

import { Section } from "@/app/[locale]/type"
import { useGetComponent } from "@/schema/services/component"

export const Video = ({ data }: { data: Section }) => {
    const { data: embedId, isLoading } = useGetComponent({ section_id: data?.id, queryKey: "section_video" })
    if(isLoading || !embedId) return <div></div>
    
    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
            <h2 className="text-center text-3xl font-bold text-black mb-6">{data?.name}</h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black border-none">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${embedId[0]?.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}