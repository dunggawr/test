import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

interface IResponseLecturer {
    current_page: number;
    data: Lecturer[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

interface Lecturer {
    id: number;
    name: string;
    avatar: string;
    order: number;     
    status: number;    
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;        
    title: string;
    content: string;
}

export const useGetLecturer = ({ queryKey, size, page }: { size: number,page: number, queryKey: string }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['lecturer', queryKey, locale],
        queryFn: () => axiosInstance.post<IBaseResponse<IResponseLecturer>>('/lecturer/all', { language: locale, size: size, page: page }),
        select(data) {
            return data.data.data
        },
    })
}
