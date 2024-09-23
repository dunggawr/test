"use client"
import Image from "next/image";

import { Section } from "@/app/[locale]/type";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { useGetComponent } from "@/schema/services/component";

export const WhyUs = ({ data }: { data: Section }) => {
    const { data: whyUs, isLoading } = useGetComponent({ section_id: data?.id, queryKey: "section_why_us" })

    if (isLoading || !whyUs) return <section className="w-full px-[16px] md:px-[80px] h-[400px] py-12 md:py-16 bg-[#FDF6EB]"></section>

    return (
        <section className="w-full px-[16px] md:px-[80px] py-12 md:py-16 bg-[#FDF6EB]">
            <div className="mb-8">
                <h2 className="text-base font-bold text-[#BE5C59] text-left tracking-wider mb-6">
                    {data?.name}
                </h2>

                <h2 className="text-3xl md:text-5xl text-left font-[600] md:font-bold text-[#000F30]">
                    <div className="text-container" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[120px]">
                <Accordion type="multiple" className="AccordionRoot" defaultValue={["0"]}>
                    {whyUs && Array.isArray(whyUs) && whyUs?.map((item: any, index: number) => (
                        <AccordionItem key={index} value={`${index}`}>
                            <AccordionTrigger className="text-left text-[#000F30]">
                                <div className="flex flex-row text-2xl py-3">
                                    <div className="pr-4">{index + 1}</div>
                                    {item?.title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-[#667085]">
                                <div className="text-container" dangerouslySetInnerHTML={{__html: item?.content || ''}}/>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="relative overflow-hidden w-full h-[500px] xl:h-[760px] rounded-[32px]">
                    <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.image}` as string}
                        alt="why_us"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                    />
                </div>
            </div>
        </section>
    );
};