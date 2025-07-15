import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Builder() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: [""],
    experience: [""],
    projects: [""],
    profilePhoto:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, field) => {
    const newItems = [...formData[field]];
    newItems[index] = e.target.value;
    setFormData({ ...formData, [field]: newItems });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeField = (field, index) => {
    const newItems = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("resumeData", JSON.stringify(formData));
    navigate("/preview");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mt-12 py-8">
      <h2 className="text-3xl font-body1 font-bold mb-6 text-center text-gray-800">
        Resume Builder
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* addimg */}
        <div className="text-black">
          <label className="block font-body1 text-black font-semibold mb-2">Add Image</label>
            <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData((prev) => ({
                  ...prev,
                  profilePhoto: reader.result,

                }));
              };
              if (file) reader.readAsDataURL(file);
            }}
            />
            {/* imgprev */}

            {formData.profilePhoto && (
              <img 
              src={formData.profilePhoto}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mt-2 border-2"
              />
            )}

        </div>

        {/* Basics */}
        <input name="fullName" onChange={handleChange} placeholder="Full Name" className="w-full p-3 bg-rose-50 text-black border rounded" required />
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-3 bg-rose-50 text-black border rounded" required />
        <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full p-3 bg-rose-50  text-black border rounded" required />
        <textarea name="summary" onChange={handleChange} placeholder="Professional Summary" className="w-full bg-rose-50 text-black p-3 border rounded" required />
        <input name="skills" onChange={handleChange} placeholder="Skills (comma separated)" className="w-full bg-rose-50 text-black p-3 border rounded" required />

        {/* Education  */}
        <div>
          <label className="block font-body1 text-black font-semibold mb-2">Education</label>
          {formData.education.map((edu, i) => (
            <div key={i} className="mb-2 flex gap-2">
              <textarea
                value={edu}
                onChange={(e) => handleArrayChange(e, i, "education")}
                className="w-full p-2 border bg-rose-50 text-black rounded"
              />
              <button type="button" onClick={() => removeField("education", i)} className="text-red-500">✖</button>
            </div>
          ))}
          <button type="button" onClick={() => addField("education")} className="text-black  mt-1">
            + Add Education
          </button>
        </div>

        {/* Experience */}
        <div>
          <label className="block font-body1 text-black font-semibold mb-2">Experience</label>
          {formData.experience.map((exp, i) => (
            <div key={i} className="mb-2 flex gap-2">
              <textarea
                value={exp}
                onChange={(e) => handleArrayChange(e, i, "experience")}
                className="w-full p-2 border bg-rose-50 text-black rounded"
              />
              <button type="button" onClick={() => removeField("experience", i)} className="text-red-500">✖</button>
            </div>
          ))}
          <button type="button" onClick={() => addField("experience")} className="text-black mt-1">
            + Add Experience
          </button>
        </div>

        {/* Projects  */}
        <div>
          <label className="block font-body1 text-black font-semibold mb-2">Projects</label>
          {formData.projects.map((proj, i) => (
            <div key={i} className="mb-2 flex gap-2">
              <textarea
                value={proj}
                onChange={(e) => handleArrayChange(e, i, "projects")}
                className="w-full p-2 border bg-rose-50 text-black rounded"
              />
              <button type="button" onClick={() => removeField("projects", i)} className="text-red-500">✖</button>
            </div>
          ))}
          <button type="button" onClick={() => addField("projects")} className="text-black mt-1">
            + Add Project
          </button>
        </div>
        

        {/* Submit */}
        <button type="submit" className="w-full bg-rose-500 font-body1 text-white py-3 rounded-lg hover:bg-rose-800 duration-500">
          Preview Resume
        </button>
      </form>
    </div>
  );
}

export default Builder;
