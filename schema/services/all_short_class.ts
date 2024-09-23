import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { axiosInstance } from '@/lib/api';

import { IBaseResponse } from '@/app/[locale]/type';

export const useGetAllClass = () => {
    const locale = useLocale()
    return useQuery({
        queryKey: ['section_All_Class', locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/class/all-short', { language: locale }),
        select(data) {
            return data.data
        },
    })
}
