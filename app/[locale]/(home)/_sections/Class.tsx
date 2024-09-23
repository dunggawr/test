"use client"
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation"; 

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useGetAll } from "@/schema/services/all";
import { useGetHLClass } from "@/schema/services/hlClass";
import { Section } from "@/app/[locale]/type";

interface HLClass {
    id: number;
    image: string;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    name: string;
    description: string;
    content: null | string;
}

export const Class: React.FC<{ data: Section }> = ({data}) => {
    const t = useTranslations()
    const router = useRouter()

    const { data: menu } = useGetAll();
    const { data: info_classes, isLoading } = useGetHLClass();

    if (isLoading || !info_classes || !menu) return <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]"></section>

    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-[#FDF6EB]">
            <h2 className="text-base text-[#BE5C59] text-left font-bold tracking-wider">
                {data?.name}
            </h2>
            <h2 className="flex text-3xl text-[#000F30] md:text-5xl text-left font-[600] md:font-bold mt-4 mb-10 gap-2">
                <div className="text-container" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-top">
                {info_classes && Array.isArray(info_classes) && info_classes?.map(({id, content, image, description, name}: HLClass) => {
                    let isComing = false
                    if (content === null)
                        isComing = true
                    return (
                        <div key={id}>
                            <Card className="flex flex-col w-full h-full border-0 shadow-none">
                                <CardHeader className="relative overflow-hidden w-full h-[240px] rounded-xl shadow-md">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}` as string}
                                        alt="image about class"
                                        fill
                                        style={{
                                            objectFit: "cover"
                                        }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={true}
                                    />
                                    <Badge
                                        data-iscoming={isComing}
                                        variant="secondary"
                                        className="absolute text-white justify-center text-base font-normal top-4 right-4 data-[iscoming=false]:hidden w-[130px] h-[40px] bg-[#59BBBE] rounded-xl hover:text-black"
                                    >
                                        {t("come")}
                                    </Badge>
                                </CardHeader>

                                <div className="flex flex-col justify-between mt-4 gap-3 flex-grow">
                                    <CardTitle className="text-[#000F30] text-xl">{name}</CardTitle>
                                    <CardContent className="text-[#514F4F] text-base text-left">
                                        <div className="text-container" dangerouslySetInnerHTML={{__html: description || ''}}/>
                                    </CardContent>

                                    <Button
                                        className="w-full p-0 h-14 rounded-2xl bg-white text-[#BE5C59] border-solid border-[1px] font-[600] border-[#BE5C59] group/arrow"
                                        variant="ghost"
                                    >
                                        <div onClick={() => router.push(`${menu[2].url}/${id}`)} className="flex justify-center items-center gap-2 w-full h-full">
                                            {t("discovery")}
                                            <ArrowRight className="group-hover/arrow:translate-x-2 transition-transform" />
                                        </div>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}