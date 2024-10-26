"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function page() {
  const resusableFunc = `  function dropdownModalAndSelect(
    dropDown,
    dropDownModal,
    openDropDownClasses,
    closeDropDownClasses,
  ) {
    if (dropDown) {
      dropDown.addEventListener("click", () => {
        if (dropDownModal.classList.contains("visible")) {
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        } else {
          dropDownModal.classList.remove(...closeDropDownClasses);
          dropDownModal.classList.add(...openDropDownClasses);
        }
      });

      const itemList = dropDownModal.querySelectorAll(".item");

      const selectedItem = dropDown.querySelector(".selectedItem");
      itemList.forEach((item) => {
        item.addEventListener("click", () => {
          selectedItem.textContent = item.textContent;
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        });
      });

      document.addEventListener("click", (e) => {
        if (!dropDown.contains(e.target) && !dropDownModal.contains(e.target)) {
          dropDownModal.classList.add(...closeDropDownClasses);
          dropDownModal.classList.remove(...openDropDownClasses);
        }
      });
    }
  }`;

  const htmlComponent = `<div class="relative">
                <div
                  class="selectCountry flex w-full cursor-pointer items-center justify-between rounded-xl border-x border-b-2 border-t border-n50 bg-white p-3.5 text-n50 dark:border-n400 dark:bg-n0 dark:text-white"
                >
                  <p class="selectedItem">Select Country</p>
                  <i class="ph ph-caret-down"></i>
                </div>
                <div
                  class="selectCountryModal invisible absolute left-0 right-0 top-14 max-h-40 origin-top scale-0 overflow-auto rounded-md bg-n0 text-white opacity-0 duration-500"
                >
                  <ul class="flex flex-col gap-1 p-4">
                    <li
                      class="item cursor-pointer duration-300 hover:tracking-wide"
                    >
                      Bangladesh
                    </li>
                  </ul>
                </div>
              </div>`;

  const callTheFunction = `const selectCountry = document.querySelector(".selectCountry");
  const selectCountryModal = document.querySelector(".selectCountryModal");
  const activeModalClasses = ["visible", "opacity-100", "z-20", "scale-100"];
  const inactiveClasses = ["invisible", "opacity-0", "scale-0"];

  dropdownModalAndSelect(
    selectCountry,
    selectCountryModal,
    activeModalClasses,
    inactiveClasses,
  );`;
  return (
    <div>
      <h1 className="text-3xl font-semibold">
        Create Dropdrown and select Item from the list
      </h1>
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

      <h1 className="text-3xl font-semibold">Call The Function</h1>
      <button
        className=""
        onClick={() => navigator.clipboard.writeText(callTheFunction)}
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
        {callTheFunction}
      </SyntaxHighlighter>
    </div>
  );
}
