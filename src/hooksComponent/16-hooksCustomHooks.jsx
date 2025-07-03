import React from "react"
import useDocumentTitle from "./customHooks/useDocumentTitle"

function HooksCustomHooks() {

  const [docTitle, setDocTitle] = React.useState('Hooks Custom Hooks');

  useDocumentTitle(docTitle);

  return (
    <div>
      <p>{docTitle}</p>
      <input type="text" value={docTitle} onChange={(e) => { setDocTitle(e.target.value) }} />
    </div>
  )
}
export default HooksCustomHooks