import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useGetNavbarLesson = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: ['NavbarLesson'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<any>('/lecture-type/all', { language: locale });
            return data;
        },
        select(data) {
            return data
        },
    });
};
