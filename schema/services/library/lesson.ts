import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";
import { useAppSelector } from '@/components/hooks/useRedux';

export const useGetLecture = ({ page, size }: { page: number, size: number }) => {
    const locale = useLocale();
    const lecture_type_id = useAppSelector(state => state.activeLecture);

    return useQuery({
        queryKey: ['lectures'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<any>('/lecture/get-by-lecture-type', { language: locale, page: page, lecture_type_id: lecture_type_id, size: size });
            return data.data
        },
        select(data) {
            return data
        },
    });
};
