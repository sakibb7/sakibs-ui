"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CreateTabs() {
  const resusableFunc = `function createTab(tabName, activeButtonClassList, inactiveButtonClassList) {
    const tabButtons = tabName?.querySelectorAll(".tab-item");

    if (tabButtons) {
      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
       
          const tabNameText = button.innerText
            .toLowerCase()
            .replace(/\\s+/g, "-")
            .trim();
          tabButtons.forEach((otherButton) => {
            const otherTabName = otherButton.innerText
              .toLowerCase()
              .replace(/\\s+/g, "-")
              .trim();
        
            activeButtonClassList.forEach((className) => {
              otherButton.classList.toggle(
                className,
                tabNameText === otherTabName,
              );
            });

            inactiveButtonClassList.forEach((className) => {
              otherButton.classList.toggle(
                className,
                tabNameText !== otherTabName,
              );
            });

            const otherTabContent = tabName.querySelector(\`#\${otherTabName}\`);

            otherTabContent.classList.toggle(
              "animationOne",
              tabNameText === otherTabName,
            );
            otherTabContent.classList.toggle(
              "hidden",
              tabNameText !== otherTabName,
            );
            otherTabContent.classList.toggle(
              "animationTwo",
              tabNameText !== otherTabName,
            );
          });
        });
      });
    }
  }`;

  const htmlComponent = `<div class="helpCenterTab pt-8">
          <ul
            class="tab-button flex items-center justify-between gap-2 text-center"
          >
            <li
              class="tab-item cursor-pointer "
            >
              FAQ
            </li>
            <li
              class="tab-item cursor-pointer "
            >
              Contact Us
            </li>
          </ul>
          <div class="pt-8 ">
            <div class="animationOne content" id="faq">
                 Tab One
            </div>
            <div class="animationTwo content hidden" id="contact-us">
              Tab Two
            </div>
          </div>
        </div>`;

  return (
    <div>
      <h1 className="text-3xl font-semibold">Create Tabs</h1>
      <button
        className=""
        onClick={() => navigator.clipboard.writeText(resusableFunc)}
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
        {resusableFunc}
      </SyntaxHighlighter>

      <h1 className="text-3xl font-semibold">Create HTML component</h1>
      <button
        className=""
        onClick={() => navigator.clipboard.writeText(htmlComponent)}
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
        {htmlComponent}
      </SyntaxHighlighter>
    </div>
  );
}

export default CreateTabs;
