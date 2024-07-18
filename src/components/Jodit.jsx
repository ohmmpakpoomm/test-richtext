"use client";

import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function Jodit({ defaultValue = "" }) {
  const editorRef = useRef(null); //declared a null value
  const [value, setValue] = useState(defaultValue); //declare using state

  /* The most important point*/
  const config = useMemo(
    //  Using of useMemo while make custom configuration is strictly recomended
    () => ({
      //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
      /* Custom image uploader button configuretion to accept image and convert it to base64 format */
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // this line is not much important , use if you only strictly want to allow some specific image format
      },
    }),
    []
  );
  /* function to handle the changes in the editor */
  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <JoditEditor
        ref={editorRef} //This is important
        value={value} //This is important
        config={config} //Only use when you declare some custom configs
        tabIndex={1} //This is important
        onBlur={(newContent) => setValue(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
        className="w-full h-[70%] mt-10 bg-white text-black"
      />
      <style>{`.jodit-wysiwyg{height:300px !important, color:#000}`}</style>
    </div>
  );
}
