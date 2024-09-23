'use client';

import React from 'react';
import Image from 'next/image';
import { useGetLecturer } from '@/schema/services/lecturer';

const formatContent = (content: string) => {
  const paragraphs = content.split('\n').filter(paragraph => paragraph.trim() !== '');

  return `
    <ul style="list-style-type: none; padding-left: 0; margin-left: 0;">
  ${paragraphs.map(paragraph => `
    <li style="position: relative; padding-left: 30px; margin-bottom: 8px; display: flex; align-items: center;">
      <span style="position: absolute; left: 10px; top: 18px; transform: translateY(-50%); border-radius: 50%; border: 1px solid #514F4F; width: 6px; height: 6px; background: #514F4F;"></span>
      ${paragraph}
    </li>
  `).join('')}
  </ul>
  `;
};

export const Lecture = ({ data }: { data: any }) => {
  const { data: lecturer, isLoading } = useGetLecturer({page: 1, size: 10, queryKey: 'lectures' });

  if (!data || isLoading) return <div></div>;

  return (
    <div className="px-6 py-10 md:px-[80px] md:py-[40px;80px] font-bold gap-20 font-sans bg-[#FDF6EB]">
      <h1 className="gap-2 text-[#BE5C59] text-[16px] leading-6 md:text-[20px] md:leading-6 text-left">
        {data?.name}
      </h1>
      <p className="text-[#000F30] text-[32px] leading-[52px] font-semibold md:text-[48px] md:leading-[76px] md:font-bold text-left gap-2">
        {data?.description}
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {lecturer && Array.isArray(lecturer) && lecturer?.map((item: any) => (
          <div
            key={item.id}
            className="relative p-3 border rounded-lg bg-[#ffffff] border-[#ffffff]"
          >
            <div className="w-full h-[500px] relative mb-4 flex-shrink-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.avatar}` as string}
                alt={`${item?.avatar + 1}`}
                layout="fill"
                objectFit="fit"
                className="rounded-lg"
                priority={true}
              />
            </div>
            <p className="text-[#000F30] md:font-semibold md:leading-9 text-[24px] md:text-[24px]">{item.name}</p>
            <span className="text-[#514F4F] md:font-normal md:leading-6 text-[16px] md:text-[18px] mb-2 mt-1">{item?.title}</span>
            <div
              className="text-[#514F4F] md:font-normal md:leading-6 text-[16px] md:text-[18px] mb-2 mt-1"
              style={{ lineHeight: '1.8' }}
              dangerouslySetInnerHTML={{ __html: formatContent(item?.content) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecture;
