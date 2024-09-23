"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"

import { ShareFacebook } from "@/app/[locale]/(news&blog)/news&blog/[slug]/_sections/ShareFacebook"
import { ShareZalo } from "@/app/[locale]/(news&blog)/news&blog/[slug]/_sections/ShareZalo"

import CopyPathnameButton from "@/app/[locale]/(news&blog)/news&blog/[slug]/_sections/CopyPathname"
import { useTranslations } from "next-intl"
import { Slug } from "@/app/[locale]/type"

export const News: React.FC<{ detail: Slug | undefined }> = ({ detail }) => {
    const t = useTranslations()
    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white lg:grid grid-cols-3 gap-10">
            <div>
                <h2 className="font-semibold text-[32px] text-black leading-[52px] mb-8" dangerouslySetInnerHTML={{ __html: detail?.title || '' }} />
                <Separator className="bg-[#98A2B3] mb-8" />
                <div className="text-[#514F4F] mb-10" dangerouslySetInnerHTML={{ __html: detail?.description || '' }} />
                <div className="w-[300px]">
                    <Separator className="bg-[#98A2B3] mb-4" />
                    <div className="flex items-center gap-2">
                        <div className="text-black">{t("share")}</div>
                        <ShareFacebook />
                        <ShareZalo />
                        <CopyPathnameButton />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className="relative w-full lg:h-[317px] xl:h-[413px] overflow-hidden mb-8">
                    <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${detail && detail.image}` as string}
                        alt=""
                        sizes=""
                        priority={true}
                    />
                </div>
                <div className="text-black" dangerouslySetInnerHTML={{ __html: detail?.content || '' }} />
            </div>
            <Separator className="lg:col-span-3 bg-[#98A2B3] mt-7 lg:mt-0" />
        </section>
    )
}
