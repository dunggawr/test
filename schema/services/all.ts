import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetAll = () => {
    const locale = useLocale()

    return useQuery({
        queryKey: ["getAllPage", locale],
        queryFn: () => axiosInstance.get<IBaseResponse<any>>(`/page/all?language=${locale}`),
        select(data) {
            return data.data
        },
    })
}
