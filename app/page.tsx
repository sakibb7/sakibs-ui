"use client";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  const codeString = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key: \`code-segment-\${childrenCount}-\${i}\`
    }));
  }
}
}
  `;
  return (
    <div>
      <button
        className=""
        onClick={() => navigator.clipboard.writeText(codeString)}
      >
        Copy Code
      </button>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
        customStyle={{ padding: "1rem" }}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
