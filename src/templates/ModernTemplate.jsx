import React from "react";

const ModernTemplate = React.forwardRef(({ resumeData }, ref) => {
  const { fullName = "", email = "", phone = "", summary = "", skills = "", education = [], experience = [], projects = [], profilePhoto = "" } = resumeData;

  return (
    <div ref={ref} className="p-6 border rounded-lg shadow bg-gradient-to-br from-white to-gray-100">
      {profilePhoto && (
        <div className="flex justify-center mb-4">
          <img src={profilePhoto} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-indigo-400" />
        </div>
      )}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">{fullName}</h1>
      <p className="text-gray-600 text-center">{email} | {phone}</p>
      <hr className="my-4 border-t-2 border-indigo-300" />

      {[{ title: "Summary", content: summary }, { title: "Skills", content: skills }, { title: "Education", content: education }, { title: "Experience", content: experience }, { title: "Projects", content: projects }].map(({ title, content }, idx) => (
        <section className="mb-6" key={idx}>
          <h3 className="text-xl font-semibold text-indigo-700 mb-2 border-b border-indigo-300 pb-1 uppercase">{title}</h3>
          {Array.isArray(content)
            ? content.map((item, i) => <p key={i} className="text-gray-700 mb-1">• {item}</p>)
            : <p className="text-gray-700 whitespace-pre-line">{content}</p>}
        </section>
      ))}
    </div>
  );
});

export default ModernTemplate;
