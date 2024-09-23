import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { axiosInstance } from '@/lib/api';

import { useAppSelector } from '@/components/hooks/useRedux';
import { IBaseResponse } from '@/app/[locale]/type';

export const useSectionByPage = (page_id: number) => {
    const activeMenuId = useAppSelector(state => state.activeMenu);
    const locale = useLocale()

    return useQuery({
        queryKey: ['section', page_id, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/section/get-by-page', { language: locale || 'vi', page_id: activeMenuId }),
        select(data) {
            return data.data
        },
    })
};
export const useSectionByUrl = (path: string) => {
    const locale = useLocale()
    return useQuery({
        queryKey: ['section', path, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<any>>('/section/get-by-page-url', { language: locale || 'vi', url: path }),
        select(data) {
            return data.data
        },
    })
};
