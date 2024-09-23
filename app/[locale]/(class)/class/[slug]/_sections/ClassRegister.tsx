'use client'
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';


export const ClassRegister = () => {
    const t = useTranslations();
    const router = useRouter();
    const locale = useLocale();

    return (
        <div className="px-[7px] py-[12px] h-[700px] md:h-[538px] mt-4 rounded-[16px] font-sans text-black md:px-[40px] md:py-[80px]
       flex flex-col md:flex-row justify-between gap-5 bg-[#F8EDED] md:rounded-[24px]">
            <div className={"flex flex-col"}>
                <label className={"text-[32px] font-[600] text-[#000F30]"}>
                    {t('class.label.register-title')}
                </label>
                <label className={"text-[16px] font-[400] text-[#514F4F] mt-[12px]"}>
                    {t('class.label.description')}
                </label>
                <Button onClick={() => router.push(`/${locale}/registration-process`)}
                    className="w-[240px] h-[56px] rounded-[16px] bg-[#BE5C59] text-white text-center font-[700] mt-[16px]"
                    variant="ghost"
                >
                    <div  className="flex gap-2">
                        {t('class.label.register')}
                    </div>
                </Button>
            </div>
            <div className={"rounded-[32px] w-full h-full md:w-[483px] md:h-[378px] border border-solid  border-[#C1C5BF] flex justify-end relative"}>
                <Image
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                    quality={100}
                    unoptimized
                    priority={true}
                    src={'/images/class/register.png'}
                    alt="register"
                    className={"rounded-[32px] p-[20px] h-[338px]"}
                />
            </div>
        </div>
    );
};

export default ClassRegister;
