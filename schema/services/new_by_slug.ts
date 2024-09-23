import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetNewsBySlug = ({ slug }: { slug: string }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['news', slug, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/news/get-by-slug', { language: locale, slug: slug }),
        select(data) {
            return data.data[0]
        },
    })
}
