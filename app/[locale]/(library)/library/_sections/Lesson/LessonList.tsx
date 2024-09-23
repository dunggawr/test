'use client'

import React, { useEffect } from 'react';
import LectureItem from '@/app/[locale]/(library)/library/_sections/Lesson/LessonItem';

import { useGetLecture } from '@/schema/services/library/lesson';
import { useAppSelector } from '@/components/hooks/useRedux';


type LessonListProps = {};


const LessonList: React.FC<LessonListProps> = () => {
    const { data: lecture, isLoading, refetch } = useGetLecture({ page: 1, size: Number.MAX_SAFE_INTEGER });
    const lecture_type_id = useAppSelector(state => state.activeLecture);

    useEffect(() => {
        refetch();
    }, [lecture_type_id]);

    if (isLoading) return <div></div>;
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {lecture && Array.isArray(lecture) && lecture?.map((item: any, index: number) => (
                    <LectureItem
                        key={index}
                        title={item.title}
                        image={item.image}
                        view={item.viewer}
                        time={item.created_at}
                        link={item.associcate_link}
                    />
                ))}
            </div>
        </section>
    );
};

export default LessonList;
