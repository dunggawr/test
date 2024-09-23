import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useGetNavbarDocument = () => {
    const locale = useLocale();
    return useQuery({
        queryKey: ['NavbarDocument'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<any>('/document-type/all', { language: locale });
            return data;
        },
        select(data) {
            return data
        },
    });
};
