import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetAllCategory = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ["AllCategory", locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/news-category/all', { language: locale }),
        select(data) {
            return data.data
        },
    })
}
