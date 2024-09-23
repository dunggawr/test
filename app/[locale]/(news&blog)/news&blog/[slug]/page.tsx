"use client"

import React from "react"

import { useGetNewsBySlug } from "@/schema/services/new_by_slug"

import { News } from "@/app/[locale]/(news&blog)/news&blog/[slug]/_sections/News"
import { OtherNews } from "@/app/[locale]/(news&blog)/news&blog/[slug]/_sections/OtherNews"

export default function DetailNews({ params }: { params: { slug: string } }) {
    const { data: detail, isLoading } = useGetNewsBySlug({ slug: params.slug })

    if (isLoading || !detail) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-white"></section>

    return (
        <React.Fragment>
            <News detail={detail} />
            <OtherNews id={detail.news_category_id} />
        </React.Fragment>
    )
}
