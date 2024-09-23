"use client"

import React from 'react'

import { useGetAllCategory } from '@/schema/services/allcategory'
import { useGetNews } from '@/schema/services/allNews'

import { LiNews } from '@/app/[locale]/(news&blog)/news&blog/_sections/Listnews'
import { NewsBig } from '@/app/[locale]/(news&blog)/news&blog/_sections/NewsBig'

export const NewsAndBlog = () => {
    const { data: category, isLoading: isLoading1 } = useGetAllCategory()
    const { data: news, isLoading: isLoading2 } = useGetNews()
    if (isLoading2 || isLoading1 || !news || !category) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-white" />

    return (
        <React.Fragment>
            <NewsBig
                tag={category[news[0].news_category_id - 1].description}
                description={news[0].description}
                href={`/${news[0].slug}`}
                image={news[0].image}
                created_at={news[0].created_at}
                read_time={news[0].read_time}
                title={news[0].title}
            />
            <LiNews data={news} />
        </React.Fragment>
    )
}