import React from "react";
import PageContext from "../../contexts/usePage/usePageContext";
import PageBuilder from "../../components/PageBuilder/PageBuilder";
import { useParams } from "react-router-dom";


const PageEditor = () => {
    const {pageId} = useParams()
    return(
        <PageContext key={pageId} pageId={pageId}>
            <PageBuilder key={pageId}/>
        </PageContext>
    )
}

export default PageEditor