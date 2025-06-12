import React from "react";

const ClassicTemplate = React.forwardRef(({ resumeData }, ref) => {
  const {
    fullName = "",
    email = "",
    phone = "",
    summary = "",
    skills = "",
    education = [],
    experience = [],
    projects = [],
    profilePhoto = "",
  } = resumeData;

  return (
    <div
      ref={ref}
      className="p-8 bg-white text-gray-900 font-serif border border-gray-300 shadow-sm max-w-3xl mx-auto"
    >
      {profilePhoto && (
        <div className="flex justify-center mb-6">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-400"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold text-center mb-2">{fullName}</h1>
      <p className="text-center text-gray-700 mb-4">
        {email} | {phone}
      </p>
      <hr className="border-t border-gray-300 mb-6" />

      {[{ title: "Summary", content: summary },
        { title: "Skills", content: skills },
        { title: "Education", content: education },
        { title: "Experience", content: experience },
        { title: "Projects", content: projects }].map(({ title, content }, idx) => (
        <section key={idx} className="mb-5">
          <h2 className="text-xl font-bold underline mb-2">{title}</h2>
          {Array.isArray(content)
            ? content.map((item, i) => (
                <p key={i} className="mb-1">• {item}</p>
              ))
            : <p className="whitespace-pre-line">{content}</p>}
        </section>
      ))}
    </div>
  );
});

export default ClassicTemplate;
