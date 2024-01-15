import React, { useState, useRef } from "react";
import "./DragDropImageUploader.css";
import axios from "axios"
const DragDropImageUploader = () => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  function selectFile() {
    fileInputRef.current.click();
  }
  
  function onFileSelect(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const selectedImage = files[0];
    setImage(URL.createObjectURL(selectedImage));
  }

  function removeImage() {
    setSelectedFile(null);
    setImage(null);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    // Do something with the dropped file
    // For example, you can call a function to handle the file

    handleDroppedFile(file);
  }

  function handleDroppedFile(file) {
    // Handle the dropped file here
    try {
      // Handle the dropped file here
      setSelectedFile(file);
      
      setImage(URL.createObjectURL(file));
    } catch (error) {
      console.error('Error handling dropped file:', error);
    }
  }

   const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file.');
        return;
      }
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Adjust the URL to your backend endpoint for handling file uploads
      const response = await axios.post('http://localhost:4000/api/v1/foodcoma/openai', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body:{
          questions : "What is this food "
        }
      });

      console.log('File upload successful:', response.data);
      // Handle success, e.g., update UI or state
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, e.g., show an error message
    }
  };


  console.log(selectedFile);
  return (
    <div className="card">
      <div className="top">
        <p>Drag & Drop image uploading</p>
      </div>
      <div
        className={`drag-area ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {image ? (
          <div className="image">
            <span className="delete" onClick={removeImage}>
              &times;
            </span>
            <img id="chosen-img" src={image} alt="" />
          </div>
        ) : (
          <span className="select" role="button" onClick={selectFile}>
            Browse
          </span>
        )}

        <input
          name="file"
          type="file"
          className="file"
          ref={fileInputRef}
          onChange={onFileSelect}
          accept="image/*"
        />
      </div>

      {image && (
        <button onClick={ handleUpload}>Upload</button>
      )}
    </div>
  );
};

export default DragDropImageUploader;
