import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import { axiosInstance } from '@/lib/api';
import { IBaseResponse } from '@/app/[locale]/type';

export const useGetFootData = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['sectionFooter', locale],
        queryFn: () => axiosInstance.get<IBaseResponse<any>>('/config/website'),
        select(data) {
            return data.data
        },
    })
}
