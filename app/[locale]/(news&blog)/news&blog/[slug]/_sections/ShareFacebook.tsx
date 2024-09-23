"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const ShareFacebook = () => {
    const pathname = usePathname()
    const fullUrl = `${window.location.origin}${pathname}`
    return (
        <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#98A2B3] flex justify-center items-center"
        >
            <div className="relative w-5 h-5 overflow-hidden">
                <Image
                    priority={true}
                    fill
                    style={{ objectFit: "cover" }}
                    src="/images/facebook-logo.png"
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </Link>
    )
}
