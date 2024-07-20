import { useEffect, useState } from "react";
import React from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
  }, [html, css, js]);

  const handleHtmlChange = (value) => {
    setHtml(value);
  };

  const handleCssChange = (value) => {
    setCss(value);
  };

  const handleJsChange = (value) => {
    setJs(value);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#282c34', color: 'white' }}>
      <header style={{ padding: '10px', textAlign: 'center' }}>
        <h1>EZ WEB DEV</h1>
      </header>
      <div style={{ display: 'flex', width: '80%', height: '80%', backgroundColor: '#fff', color: '#000', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={handleHtmlChange}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={handleCssChange}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={handleJsChange}
          />
        </div>
        <div style={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
          <iframe
            title="output"
            sandbox="allow-scripts"
            srcDoc={srcDoc}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
