import React from "react";

const ElegantTemplate = React.forwardRef(({ resumeData }, ref) => {
  const { fullName = "", email = "", phone = "", summary = "", skills = "", education = [], experience = [], projects = [], profilePhoto = "" } = resumeData;

  return (
    <div ref={ref} className="flex border rounded-lg shadow w-full bg-white text-blue-600">
      {/* Left Panel */}
      <div className="w-1/3 p-6 text-white bg-blue-800">
        {profilePhoto && (
          <div className="flex justify-center mb-4">
            <img src={profilePhoto} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-white" />
          </div>
        )}
        <h1 className="text-2xl font-bold text-center mb-2">{fullName}</h1>
        <p className="text-center">{email}</p>
        <p className="text-center">{phone}</p>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 p-6">
        {[{ title: "Summary", content: summary }, { title: "Skills", content: skills }, { title: "Education", content: education }, { title: "Experience", content: experience }, { title: "Projects", content: projects }].map(({ title, content }, idx) => (
          <section className="mb-4" key={idx}>
            <h3 className="text-xl font-semibold border-b border-white pb-1 mb-2 uppercase">{title}</h3>
            {Array.isArray(content)
              ? content.map((item, i) => <p key={i} className="mb-1">• {item}</p>)
              : <p className="whitespace-pre-line">{content}</p>}
          </section>
        ))}
      </div>
    </div>
  );
});

export default ElegantTemplate;
