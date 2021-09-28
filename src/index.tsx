import React, { useRef } from "react";
import { render } from "react-dom";

import EmailEditor from "react-email-editor";

// @ts-nocheck
const App = () => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    // @ts-ignore
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
