import {useLocale, useTranslations} from 'next-intl';
import {locales} from "@/lib/config-navigation";
import React, { useTransition } from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import clsx from 'clsx';
import { usePathname, useRouter } from '@/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation';

export default function LocaleSwitcher() {
    const t = useTranslations('language');
    const locale = useLocale();
    const router = useRouter();
    const param = useParams()
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            const slug = param.slug + '';
            // @ts-ignore
            router.push({pathname, params : {slug} }, {locale: nextLocale});
        });
    }
    return (
        <React.Fragment>
            <NavigationMenu className="hidden lg:block cursor-pointer pl-6 border-2" style={{borderTopWidth: 0,borderBottom: 0, borderRight: 0}}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={"text-base uppercase font-normal text-[#000F30] bg-[#FDF6EB] p-0 data-[state=open]:bg-[#FDF6EB] hover:bg-[#FDF6EB] hover:text-[#000F30] focus:bg-[#FDF6EB] focus:text-[#000F30]"} >
                            {t(locale)}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[65px] grid-cols-1 gap-5 p-1 bg-[#FDF6EB]">
                                {locales?.map((prop: string) => (
                                  <div
                                    onClick={() => {
                                        onSelectChange(prop)
                                    }}
                                    key={prop}
                                    className={clsx("p-3 text-sm hover:bg-[#fffcf7] uppercase line-clamp-2 rounded-md text-[#000F30]",
                                      locale === `${prop}` && "font-bold text-[#BE5C59]")}
                                  >
                                      {t(prop)}
                                  </div>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Accordion  type="single" collapsible className="my-0 AccordionRoot block md:hidden">
                <AccordionItem value="local" className={'my-0 border-[#D0D5DD]'}>
                    <AccordionTrigger className={ 'text-left pt-0 pb-2 uppercase text-[#000F30] hover:no-underline font-normal'}>
                        {t(locale)}
                    </AccordionTrigger>
                    <AccordionContent>
                        {locales?.map((prop: any, index: number) => (
                          <div key={index}>
                              <Button
                                asChild
                                variant="ghost"
                                className="justify-start uppercase w-full text-base"
                              >
                                  <div
                                    onClick={() => {
                                        onSelectChange(prop)
                                    }}
                                    className={clsx("text-sm uppercase", locale === prop ? ' font-bold text-[#BE5C59]' : "text-[#282B27]")}>
                                      {t(prop)}
                                  </div>
                              </Button>
                              <Separator className={clsx("mb-2 bg-[#D0D5DD]", index === locales?.length - 1 && "hidden")} />
                          </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </React.Fragment>
    );
}
