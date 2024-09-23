import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetHLClass = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionHLClass', locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/class/high-light', { language: locale, page: 1, size: 12 }),
        select(data) {
            return data.data.data //Fixed
        },
    })
}
