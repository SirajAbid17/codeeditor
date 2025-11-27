import React, { useRef, useState, useEffect } from 'react';
import { FaCopy } from "react-icons/fa";
import { VscSave } from "react-icons/vsc";
import { FaCircleChevronUp, FaCircleChevronDown } from "react-icons/fa6";
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Codeeditor() {
  const outputFrameRef = useRef(null);

  
  const [htmlCode, setHtmlCode] = useState(localStorage.getItem('htmlCode') || '');
  const [cssCode, setCssCode] = useState(localStorage.getItem('cssCode') || '');
  const [jsCode, setJsCode] = useState(localStorage.getItem('jsCode') || '');
  const [isOutputExpanded, setIsOutputExpanded] = useState(false);

  const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`;

  const cssTemplate = `body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}`;

  const jsTemplate = `console.log('Hello World!');

function greet() {
    alert('Welcome!');
}`;

  const handleSave = () => {
    if (outputFrameRef.current) {
      const iframe = outputFrameRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>${htmlCode}</body>
          <script>${jsCode}<\/script>
        </html>
      `);
      iframeDoc.close();
    }
  };


  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success("Code copied!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "dark"
        });
      })
      .catch(() => {
        toast.error("Failed to copy code!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          theme: "dark"
        });
      });
  };

 
  const handleHtmlQuickStart = () => setHtmlCode(htmlTemplate);
  const handleCssQuickStart = () => setCssCode(cssTemplate);
  const handleJsQuickStart = () => setJsCode(jsTemplate);

  const toggleOutputSize = () => setIsOutputExpanded(!isOutputExpanded);

 
  useEffect(() => {
    localStorage.setItem('htmlCode', htmlCode);
  }, [htmlCode]);

  useEffect(() => {
    localStorage.setItem('cssCode', cssCode);
  }, [cssCode]);

  useEffect(() => {
    localStorage.setItem('jsCode', jsCode);
  }, [jsCode]);

  return (
    <>
      <ToastContainer />

      {!isOutputExpanded && (
        <div className='codeeditorcontainer'>

          <div className='codeeditor html'>
            <div className="head">
              <div className="left">
                <img src="./html.png" alt="" width={40} height={40} />
                <span>HTML</span>
                <button onClick={handleHtmlQuickStart} style={{
                  marginLeft: '10px',
                  padding: '2px 8px',
                  background: '#007acc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}>
                  Quick Start
                </button>
              </div>
              <div className="right">
                <FaCopy style={{ cursor: "pointer" }} onClick={() => copyToClipboard(htmlCode)} />
              </div>
            </div>
            <CodeMirror
              value={htmlCode}
              height="300px"
              extensions={[html()]}
              onChange={setHtmlCode}
              placeholder="Enter HTML code here..."
              theme="dark"
            />
          </div>

         
          <div className='codeeditor css'>
            <div className="head">
              <div className="left">
                <img src="./css.png" alt="" width={40} height={40} />
                <span>CSS</span>
                <button onClick={handleCssQuickStart} style={{
                  marginLeft: '10px',
                  padding: '2px 8px',
                  background: '#007acc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}>
                  Quick Start
                </button>
              </div>
              <div className="right">
                <FaCopy style={{ cursor: "pointer" }} onClick={() => copyToClipboard(cssCode)} />
              </div>
            </div>
            <CodeMirror
              value={cssCode}
              height="300px"
              extensions={[css()]}
              onChange={setCssCode}
              placeholder="Enter CSS code here..."
              theme="dark"
            />
          </div>

          
          <div className='codeeditor js'>
            <div className="head">
              <div className="left">
                <img src="./js3.jpg" alt="" width={40} height={40} />
                <span>JS</span>
                <button onClick={handleJsQuickStart} style={{
                  marginLeft: '10px',
                  padding: '2px 8px',
                  background: '#007acc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}>
                  Quick Start
                </button>
              </div>
              <div className="right">
                <FaCopy style={{ cursor: "pointer" }} onClick={() => copyToClipboard(jsCode)} />
              </div>
            </div>
            <CodeMirror
              value={jsCode}
              height="300px"
              extensions={[javascript()]}
              onChange={setJsCode}
              placeholder="Enter JavaScript code here..."
              theme="dark"
            />
          </div>
        </div>
      )}

      <div className="outputcontainer" style={{ height: isOutputExpanded ? '100vh' : 'auto' }}>
        <div className="output">
          <span>OUTPUT</span>
          <span className="opticon">
            <VscSave
              id='save'
              className='opt1'
              size={26}
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={handleSave}
            />
            {isOutputExpanded ? (
              <FaCircleChevronDown
                className='opt2'
                size={26}
                style={{ cursor: "pointer" }}
                onClick={toggleOutputSize}
              />
            ) : (
              <FaCircleChevronUp
                className='opt2'
                size={26}
                style={{ cursor: "pointer" }}
                onClick={toggleOutputSize}
              />
            )}
          </span>
        </div>
        <iframe
          ref={outputFrameRef}
          id='outputframe'
          title="code-output"
          style={{
            width: '100%',
            height: isOutputExpanded ? 'calc(100vh - 60px)' : '400px',
            border: '1px solid #ccc',
            transition: 'height 0.3s ease'
          }}
        ></iframe>
      </div>
    </>
  );
}
