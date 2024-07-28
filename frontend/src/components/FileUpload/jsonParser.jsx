import React from 'react';

function JSONParser({ jsonData }) {
  // Parse the top-level JSON data
  const parsedData = JSON.parse(jsonData);
  const candidate = parsedData.response.candidates[0];

  // Parse the nested JSON string in the 'text' field
  const detailedResponse = JSON.parse(candidate.content.parts[0].text);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Evaluation Result</h2>
        <div className="bg-gray-100 p-4 mt-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Rating: {detailedResponse.rate}/10</h3>
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Content Suggestions</h4>
            <ul className="list-disc list-inside">
              {detailedResponse.response.content.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Formatting Suggestions</h4>
            <ul className="list-disc list-inside">
              {detailedResponse.response.formatting.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Skills to Learn</h4>
            <ul className="list-disc list-inside">
              {detailedResponse.response.skills.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Keywords</h4>
            <ul className="list-disc list-inside">
              {detailedResponse.response.keywords.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JSONParser;
