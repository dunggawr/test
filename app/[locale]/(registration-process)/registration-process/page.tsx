"use client"

import React from 'react';
import Register from '@/app/[locale]/(registration-process)/registration-process/_sections/Register';
import { Step1 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step1';
import { Step2 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step2';
import { usePathname } from '@/navigation';
import { useSectionByUrl } from '@/schema/services/common';
import { Step5 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step5';
import { Step4 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step4';
import { Step6 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step6';
import { Step3 } from '@/app/[locale]/(registration-process)/registration-process/_sections/Step3';

export default function Page() {
    const pathname = usePathname();
    const { data: section, isLoading } = useSectionByUrl(pathname);

    if (isLoading || !section) return <></>

    return (
        <React.Fragment>
            <Step1 data={section[1]}/>
            <Step2 data={section[2]}/>
            <Step3 data={section[3]}/>
            {/* <Step4 data={section[4]}/> */}
            <Step5 data={section[5]}/>
            <Step6 data={section[6]}/>
        </React.Fragment>
    )
}
