import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

export const useGetComponent = ({ section_id, queryKey }: { section_id: number, queryKey: string }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['component', queryKey, section_id, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/component/get-by-section', { language: locale, section_id: section_id }),
        select(data) {
            return data.data
        },
    })
}
