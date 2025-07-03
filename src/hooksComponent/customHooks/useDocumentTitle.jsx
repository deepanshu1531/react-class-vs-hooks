import React from 'react'

function useDocumentTitle(docTitle) {
    React.useEffect(() => {
        document.title = docTitle;
    }, [docTitle])
}
export default useDocumentTitle