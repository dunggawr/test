import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetRelated = ({ category_id, id }: { id: number, category_id: number }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['new_related', id, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/news/get-related', { language: locale, size: 3, news_category_id: category_id, id: id }),
        select(data) {
            return data.data
        },
    })
}
