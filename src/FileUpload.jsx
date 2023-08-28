import React, { useState } from "react";
import { open } from "@tauri-apps/api/dialog";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = async (event) => {
    const result = await open({
      multiple: false,
    });

    console.log(result);
    // const selectedFile = event.target.files[0];
    // if (selectedFile) {
    //   setFile(selectedFile);
    //   // You can also handle the file upload logic here if needed
    // }
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Handle the file upload logic here, e.g., send it to a server
    console.log("File to be uploaded:", file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileChange}>aasasdasd  asdasdasd </button>
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default FileUpload;
