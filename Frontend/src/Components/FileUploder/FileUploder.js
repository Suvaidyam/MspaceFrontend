import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function FileUploder(props) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    props.setcompanyLogo(file)
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default FileUploder;