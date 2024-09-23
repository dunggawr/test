"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ShareZalo = () => {
    const pathname = usePathname()
    const fullUrl = `${window.location.origin}${pathname}`

    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://zalo.me/share/?url=${encodeURIComponent(fullUrl)}`}
            className="w-8 h-8 rounded-full border border-[#98A2B3] flex justify-center items-center"
        >
            <div className="text-xs text-black">
                Zalo
            </div>
        </Link>
    )
}
