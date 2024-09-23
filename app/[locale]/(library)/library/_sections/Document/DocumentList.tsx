import React, { useEffect } from "react";
import DocumentItem from "@/app/[locale]/(library)/library/_sections/Document/DocumentItem"; 
import { useGetDocuments } from "@/schema/services/library/documents"; 
import { useAppSelector } from '@/components/hooks/useRedux';


type DocumentListProps = {  
    
};


const DocumentList: React.FC<DocumentListProps> = () => {
  const document_type_id = useAppSelector(state => state.activeDocument);
    const {data : document, isLoading, refetch } = useGetDocuments({size: Number.MAX_SAFE_INTEGER});
  useEffect(() => {
    refetch();
  }, [document_type_id]);
    if ( isLoading) return <div></div>;
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {document && Array.isArray(document) && document?.map((item: any, index: number ) => (
                    <DocumentItem
                        key={index}
                        title={item.title}
                        downloaded={item.downloaded}
                        created_at={item.created_at}
                        link_file={item.link_file}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default DocumentList;
