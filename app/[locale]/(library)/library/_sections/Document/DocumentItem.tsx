import MailIcon from "@/components/icons/document-download-icon";
import { useTranslations } from "next-intl";
import React from "react";
import Image from 'next/image';


type DocumentItemProps = {
    title: string;
    downloaded: string;   
    created_at: string;
    link_file: string;
    image: string;
};

const DocumentItem: React.FC<DocumentItemProps> = ({ title, downloaded, created_at, link_file, image }) => {
    const handleDownload = () => {
      window.open(`${process.env.NEXT_PUBLIC_IMAGE_URL}/${link_file}`, '_blank');
    };
    const t = useTranslations();

    return (
        <div className="relative p-3 bg-[#FFFFFF] border border-[#E4E7EC] rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-[200px] mb-5 bg-[#E4E7EC] rounded-lg shadow-lg overflow-hidden">
              <Image
                src={ `${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
                priority={true}
                alt="image"
                layout="fill"
                objectFit="cover"
                loading={'eager'}
                className="rounded-lg"
              />
            </div>
            <a className="md:w-[372px] w-full text-[20px] leading-8 font-semibold text-[#000F30]">{title}</a>
            <div className="flex items-center gap-1 space-x-2 pt-3 mt-auto">
                <MailIcon />
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{downloaded} {t('download')}</span>
                <span className="text-black">•</span>
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{created_at} </span>
            </div>
            <button  onClick={handleDownload}
            className="w-full h-[64px] text-[#ffffff] text-[20px] bg-[#BE5C59] rounded-lg font-semibold leading-8 border-none mt-4">{t('downloaded')}</button>
        </div>
    );
};

export default DocumentItem;
