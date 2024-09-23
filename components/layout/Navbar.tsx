"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter, usePathname } from "@/navigation";

import { Menu, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { All_Page } from "@/app/[locale]/type";

import { useGetAll } from "@/schema/services/all";
import { useGetAllClass } from "@/schema/services/all_short_class";

import { useAppDispatch} from '@/components/hooks/useRedux';
import { setActiveMenu } from '@/lib/stores/appSlice';
import { useParams } from 'next/navigation';
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { data: menu, isLoading: isLoading1 } = useGetAll()
    const { data: classList, isLoading: isLoading2 } = useGetAllClass()
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams()
    const dispatch = useAppDispatch();
    if (isLoading1 || isLoading2) return <header className="sticky flex flex-row justify-between items-center px-[16px] md:px-[80px] z-10 w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]"></header>

    return (
        <header className="sticky flex flex-row justify-between items-center px-[16px] md:px-[80px] z-10 w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]">
            <div className="flex flex-row justify-between items-center w-full h-full border-b-[2px] border-[#E0E2DE] md:border-b-0">
                <div className="relative w-[56px] h-[56px] md:w-[98px] md:h-[98px] overflow-hidden">
                    <Image
                        alt="logo"
                        src="/images/logo.png"
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* <!-- Mobile --> */}
                <div className="flex items-center lg:hidden ">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Menu
                                strokeWidth="0.75px"
                                onClick={() => setIsOpen(!isOpen)}
                                className="cursor-pointer lg:hidden w-[45px] h-auto text-[#000F30]"
                            />
                        </SheetTrigger>
                        <SheetContent
                            side="top"
                            className="flex flex-col justify-between bg-card border-secondary bg-[#FDF6EB]"
                        >
                            <div>
                                <SheetHeader className="mb-4 ml-4">
                                    <SheetTitle className="flex items-center justify-between">
                                        <div className="relative w-[56px] h-[56px] overflow-hidden ">
                                            <Image
                                                priority={true}
                                                alt="logo"
                                                src="/images/logo.png"
                                                fill
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>

                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="outline-none w-[56px] h-[56px] flex justify-center items-center"
                                        >
                                            <X strokeWidth="1.5px" className="h-[32px] w-[32px]" color="black" />
                                        </button>

                                    </SheetTitle>
                                </SheetHeader>
                                <Separator className="mb-2 bg-[#E0E2DE]" />

                                <div className="flex flex-col gap-2">
                                    {menu?.map((item: All_Page) => (
                                        item?.order !== 3
                                            ? <div key={item?.url}>
                                                <Button
                                                    asChild
                                                    onClick={() => {
                                                        setIsOpen(false)
                                                    }}
                                                    variant="ghost"
                                                    className="justify-start w-full text-base"
                                                >
                                                    <div
                                                        onClick={() => {
                                                            router.push(item?.url)
                                                            dispatch(setActiveMenu(item.id))
                                                        }}
                                                        className={pathname == item?.url ? ' font-bold text-[#BE5C59]' : "text-[#282B27]"}>{item?.name}
                                                    </div>
                                                </Button>
                                                <Separator className="mb-2 bg-[#D0D5DD]" />
                                            </div>
                                            : <Accordion key={item?.name} type="single" collapsible className="my-0 AccordionRoot">
                                                <AccordionItem value="siuu" className={'my-0 border-[#D0D5DD]'}>
                                                    <AccordionTrigger className={pathname.includes(item?.url) ? ' font-bold text-[#BE5C59] text-left pt-0 pb-2  hover:no-underline' : 'text-left pt-0 pb-2 text-[#000F30] hover:no-underline font-normal'}>
                                                        {item?.name}
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        {classList?.map((prop: any, index: number) => (
                                                            <div key={index}>
                                                                <Button
                                                                    asChild
                                                                    onClick={() => setIsOpen(false)}
                                                                    variant="ghost"
                                                                    className="justify-start w-full text-base"
                                                                >
                                                                    <div
                                                                        onClick={() => {
                                                                            dispatch(setActiveMenu(item.id))
                                                                            router.push(`${item?.url}/${prop?.id}`)
                                                                        }}
                                                                        className={clsx("text-sm", params.slug === `${prop?.id}` ? ' font-bold text-[#BE5C59]' : "text-[#282B27]")}>{prop.name}
                                                                    </div>
                                                                </Button>
                                                                <Separator className={clsx("mb-2 bg-[#D0D5DD]", index === classList?.length - 1 && "hidden")} />
                                                            </div>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                    ))}
                                    <LocaleSwitcher></LocaleSwitcher>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* <!-- Desktop --> */}
                <div className={'hidden md:flex'}>
                    <NavigationMenu className="cursor-pointer pr-6">
                        <NavigationMenuList className="flex gap-[40px] items-center">
                            {menu?.map((item: any) => (
                              item?.order !== 3
                                ? <div
                                  key={item.url}
                                  onClick={() => {
                                      dispatch(setActiveMenu(item.id))
                                      router.push(item?.url)
                                  }}
                                  className={clsx("text-base px-2 text-[#000F30] hover:underline",  pathname === item?.url  && "font-bold text-[#BE5C59] hover:no-underline")}
                                >
                                    {item?.name}
                                </div>
                                :
                                <NavigationMenuItem key={item?.url}>
                                    <NavigationMenuTrigger className={clsx("text-base font-normal text-[#000F30] bg-[#FDF6EB] p-0 data-[state=open]:bg-[#FDF6EB] hover:bg-[#FDF6EB] hover:text-[#000F30] focus:bg-[#FDF6EB] focus:text-[#000F30]",
                                      pathname.includes(item?.url)  && "font-bold text-[#BE5C59]")} >
                                        {item?.name}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[432px] grid-cols-2 gap-5 p-4 bg-[#FDF6EB]">
                                            {classList?.map((prop: any) => (
                                              <div
                                                onClick={() => {
                                                    dispatch(setActiveMenu(item.id))
                                                    router.push(`${item?.url}/${prop?.id}`)
                                                }}
                                                key={prop?.id}
                                                className={clsx("p-3 text-sm hover:bg-[#fffcf7] rounded-md text-[#000F30]", params.slug === `${prop?.id}` && "font-bold text-[#BE5C59]")}
                                              >
                                                  {prop?.name}
                                              </div>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <LocaleSwitcher></LocaleSwitcher>
                </div>
            </div>
        </header>
    );
};
