import React from "react";
import PageContext from "../../contexts/usePage/usePageContext";
import PageBuilder from "../../components/PageBuilder/PageBuilder";
import { useParams } from "react-router-dom";


const TemplateEditor = () => {
    const {pageId} = useParams()
    return(
        <PageContext isTemplateEditor={true} key={pageId} pageId={pageId}>
            <PageBuilder key={pageId}/>
        </PageContext>
    )
}

export default TemplateEditor