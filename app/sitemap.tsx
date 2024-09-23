import { type MetadataRoute } from "next";


const locale = "vi";

const siteUrl = process.env.VERCEL_URL;

const siteConfig = (locale?: string) => ({
    name: "Minimal English",
    url: siteUrl + "/" + locale,
    ogImage: `${siteUrl}/${locale}/opengraph-image`,
    description: "Welcome to Minimal English",
    links: {
        zalo: "https://zalo.me/0365190188",
        facebook: "https://www.facebook.com/hangngaluna190188",
        youtube: "https://www.youtube.com/@minimalieltswithluna901",
    },
});

export type SiteConfig = typeof siteConfig;


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig(locale).url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteConfig(locale).url}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
        {
            url: `${siteConfig(locale).url}/project`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5,
        },
    ];
}
