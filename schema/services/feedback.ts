import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetFeedback = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionFeedback', locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/feedback/all', { language: locale, page: 1, size: 18 }),
        select(data) {
            return data.data.data
        },
    })
}
