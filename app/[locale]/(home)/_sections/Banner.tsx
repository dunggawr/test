"use client"

import Image from "next/image";
import { Section } from "@/app/[locale]/type";
import { useGetComponent } from "@/schema/services/component";

export const Banner: React.FC<{ data: Section }> = ({ data }) => {
    const { data: item, isLoading } = useGetComponent({ queryKey: data?.name, section_id: data?.id })
    if (isLoading || !item) return <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]"></section>

    return (
        <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                <div className="lg:max-w-[460px] xl:max-w-[600px] 2xl:max-w-[700px]">
                    <h2 className="text-[32px] font-[600] md:text-5xl md:font-bold mb-4 text-[#000F30]">
                        <div className="text-container" dangerouslySetInnerHTML={{__html: data?.description || ''}}/>
                    </h2>
                    <h2 className="text-[32px] font-[600] md:text-[48px] md:pb-[20px] md:pt-3 md:font-bold mb-4 text-[#BE5C59] leading-[56px]">
                        {item[0]?.title}
                    </h2>
                    <div className="text-[#514F4F] text-[16px] lg:text-[20px]">
                        <div className="text-container" dangerouslySetInnerHTML={{__html: item[0]?.content || ''}}/>
                    </div>
                </div>

                <div className="grid grid-rows-3 grid-cols-3 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] place-items-center my-8 lg:my-0">
                    <div className="w-[85px] h-[85px] md:w-[120px] md:h-[120px]"></div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image}` as string}
                            alt="image_1"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_2}` as string}
                            alt="image_2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="w-[85px] h-[85px] md:w-[120px] md:h-[120px] relative">
                        <div className="w-[76.38px] h-[76.38px] md:w-[86.38px] md:h-[86.38px] absolute bg-[#F8EDED] left-[14.07%] top-[15.83%] rounded-[24px]"></div>
                        <div className="w-[24.44px] h-[24.44px] md:w-[34.44px] md:h-[34.44px] absolute bg-[#A1423F] left-[64.17%] top-[9.42%] rounded-lg rotate-[-10.55deg]"></div>
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_3}` as string}
                            alt="image_3"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_4}` as string}
                            alt="image_4"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_5}` as string}
                            alt="image_5"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_6}` as string}
                            alt="image_6"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>

                    <div className="relative w-[85px] h-[85px] md:w-[120px] md:h-[120px] rounded-3xl overflow-hidden">
                        <Image
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item[0]?.image_7}` as string}
                            alt="image_7"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};