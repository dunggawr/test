import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/api';
import { Class_Detail, IBaseResponse } from '@/app/[locale]/type';
import { useLocale } from 'next-intl';

export const useGetClassData = (class_id: string) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['classDetail', class_id, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<Class_Detail[]>>('/class/get-by-id', { language: locale, id: class_id }),
        select(data) {
            return data.data[0]
        },
    });
};
