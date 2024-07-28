import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [responseText, setResponseText] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('http://localhost:4000/api/fileupload/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('File upload failed');
      }

      const result = await res.json();
      console.log(result.response.candidates[0].content.parts[0].text);
      setResponseText(result.response.candidates[0].content.parts[0].text);
      setError(null); // Clear previous errors
    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
      setResponseText(null); // Clear previous response
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept="application/pdf"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Upload
          </button>
        </div>
      </form>
      {error && <div className="text-red-500">{error}</div>}
      {responseText && (
        <div className="bg-gray-100 p-4 mt-4 rounded shadow-md">
          <h4 className="text-lg font-bold mb-2">Response Text</h4>
          <pre className="whitespace-pre-wrap break-words">{responseText}</pre>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
