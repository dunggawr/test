'use client';

import Image from 'next/image';
import React from 'react';

const CopyPathnameButton = () => {
    const [showPopup, setShowPopup] = React.useState(false);
    const handleCopy = () => {
        const pathname = window.location.pathname;
        const fullUrl = `${window.location.origin}${pathname}`

        navigator.clipboard.writeText(fullUrl)
            .then(() => {
                setShowPopup(true)
                setTimeout(() => {
                    setShowPopup(false)
                }, 2000)
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <button onClick={() => { handleCopy() }} className="relative w-8 h-8 rounded-full border border-[#98A2B3] flex justify-center items-center">
            <div className="relative w-5 h-5 overflow-hidden">
                <Image
                    priority={true}
                    fill
                    style={{ objectFit: "cover" }}
                    src="/images/link-circle.png"
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            {showPopup && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm px-2 py-1 rounded">
                    Copied!
                </div>
            )}
        </button>
    );
};

export default CopyPathnameButton;
