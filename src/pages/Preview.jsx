import React, { useRef, useState } from "react";
import ClassicTemplate from "../templates/ClassicTemplate";
import ModernTemplate from "../templates/ModernTemplate";
import ElegantTemplate from "../templates/ElegantTemplate";
import TemplateSelector from "../components/TemplateSelector";
import downloadPDF from "../utils/downloadPDF";

const Preview = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate resumeData={resumeData} />;
      case "elegant":
        return <ElegantTemplate resumeData={resumeData} />;
      case "classic":
      default:
        return <ClassicTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />

      <button
        onClick={() => downloadPDF("resume-section")}
        className="mb-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Download PDF
      </button>

     
      <div id="resume-section">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
