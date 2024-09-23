"use client"

import React from "react";


import { useSectionByUrl } from '@/schema/services/common';
import { Banner } from '@/app/[locale]/(home)/_sections/Banner';
import { AboutUs } from '@/app/[locale]/(home)/_sections/About_us';
import { Class } from '@/app/[locale]/(home)/_sections/Class';
import { Feedback } from '@/components/layout/Feedback';
import { WhyUs } from '@/app/[locale]/(home)/_sections/Why_us';
import { Video } from '@/app/[locale]/(home)/_sections/Video';


export default function Home() {
    const { data: section, isLoading } = useSectionByUrl('/')

    if (isLoading || !section) return <></>

    return (
        <React.Fragment>
            <Banner data={section[0]} />
            <AboutUs data={section[1]} />
            <Class data={section[2]} />
            <Feedback data={section[3]} />
            <WhyUs data={section[4]} />
        </React.Fragment>
    );
}
