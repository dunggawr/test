import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/api";
import { useLocale } from "next-intl";
import { useAppSelector } from '@/components/hooks/useRedux';

export const useGetDocuments = ({ size }: { size: number }) => {
    const locale = useLocale();
    const document_type_id = useAppSelector(state => state.activeDocument);
    return useQuery({
        queryKey: ['documents'],
        queryFn: async () => {
            const { data } = await axiosInstance.post<any>('/document/get-by-document-type', { language: locale, document_type_id: document_type_id, size: size });
            return data.data
        },
        select(data) {
            return data
        },
    });
};
