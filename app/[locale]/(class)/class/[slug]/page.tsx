'use client'

import { useEffect } from 'react';
import { useGetClassData } from '@/schema/services/class';

import ClassDetail from '@/app/[locale]/(class)/class/[slug]/_sections/ClassDetail';
import ClassRegister from '@/app/[locale]/(class)/class/[slug]/_sections/ClassRegister';
import ClassEmpty from '@/app/[locale]/(class)/class/[slug]/_sections/ClassEmpty';


export default function Page({ params }: { params: { slug: string } }) {
    const class_detail = useGetClassData(params.slug);
    useEffect(() => {
        class_detail.refetch()
    }, [class_detail, params.slug]);

    if (class_detail.data?.content === null) return (
      <section className='bg-[#FFFFFF] px-[8px] py-[60px] md:px-[106px] md:py-[80px]'>
          <ClassEmpty></ClassEmpty>
      </section>
          )

    return (
        <section className='bg-[#FFFFFF] px-[8px] py-[60px] md:px-[106px] md:py-[80px]'>
            <ClassDetail data_detail={class_detail.data}> </ClassDetail>
             <ClassRegister />
        </section>

    );
}
