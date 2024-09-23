"use client"

import Image from "next/image";
import { Section } from "@/app/[locale]/type";
import { useGetComponent } from "@/schema/services/component";
import React from "react";

export const AboutUs = ({ data }: { data: Section }) => {
    const { data: about, isLoading } = useGetComponent({ section_id: data?.id, queryKey: "section_about_ME" })

    if (isLoading || !about) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-white"></section>

    return (
        <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
            <div className="grid lg:grid-cols-2 gap-12 place-items-center">
                {/* desktop */}
                <div className="hidden lg:block">
                    <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
                        <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
                            <div className="relative w-[230px] z-[2] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl overflow-hidden">
                                <Image
                                    fill
                                    style={{
                                        objectFit: "cover"
                                    }}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${about[0]?.image}` as string}
                                    alt="about"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </div>

                        <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                            <div className="w-[230px] z-[0] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] bg-[#BE5C59]"></div>
                        </div>

                        <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
                            <div className="relative w-[230px] z-[1] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl overflow-hidden">
                                <Image
                                    fill
                                    style={{
                                        objectFit: "cover"
                                    }}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${about[0]?.image_2}` as string}
                                    alt="about"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-[16px] font-bold md:mt-[10px] mb-4 text-[#BE5C59]">
                        {data?.name}
                    </h2>

                    <h2 className="text-[32px] font-[600] md:text-5xl md:mt-[10px] md:font-bold text-[#000F30]">
                        <div className="text-container" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
                    </h2>

                    <h2 className="text-[32px] font-[600] md:text-5xl md:mb-[30px] md:mt-[10px] md:font-bold mb-6 text-[#BE5C59]">
                        {about[0]?.title}
                    </h2>
                    <div className="text-[#514F4F] text-[18px]">
                        <div className="text-container" dangerouslySetInnerHTML={{__html: about[0]?.content || ''}}/>
                    </div>
                </div>

                {/* mobile */}
                <div className="block lg:hidden">
                    <div className="flex relative w-[290px] h-[290px]">
                        <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
                            <div className="relative w-[190px] z-[2] h-[190px] rounded-[32px] drop-shadow-2xl overflow-hidden">
                                <Image
                                    fill={true}
                                    style={{
                                        objectFit: "cover"
                                    }}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${about[0]?.image}` as string}
                                    alt="about"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </div>

                        <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                            <div className="w-[190px] z-[0] h-[190px] rounded-[32px] bg-[#BE5C59]"></div>
                        </div>

                        <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
                            <div className="relative w-[190px] z-[1] h-[190px] rounded-[32px] drop-shadow-2xl overflow-hidden">
                                <Image
                                    fill={true}
                                    style={{
                                        objectFit: "cover"
                                    }}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${about[0]?.image_2}` as string}
                                    alt="about"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
