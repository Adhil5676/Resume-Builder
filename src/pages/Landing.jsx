
import { Link } from "react-router-dom";
import heroImg from "../assets/res2.png"; 

function Landing() {
  return (
    <section className="px-6 mt-10 py-12 backdrop-blur-0 min-h-[80vh]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-body1 font-bold text-rose-900 mb-4">
            Build Your Modern Resume Easily With RESBEE
          </h1>
          <p className="text-2xl font-body2 text-rose-800 mb-6">
            Create a professional, clean, and customizable resume in minutes. No sign-up required!
          </p>
          <Link to="/builder">
            <button className="bg-rose-500 font-body1 text-white px-6 py-3 rounded-xl text-lg hover:shadow-2xl hover:bg-rose-800 transition duration-500">
              Get Started
            </button>
          </Link>
        </div>

       
        <div className="md:w-1/2">
          <img
            src={heroImg}
            alt="Resume Builder Illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-2xl hover:"
          />
        </div>
      </div>

     {/* Features  */}
<div className="mt-20 text-center">
  <h2 className="text-3xl font-semibold font-body1 text-gray-950 mb-8 drop-shadow-sm">
    Features
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {[
      "Modern Resume Layouts",
      "Easy-to-Use Interface",
      "Real-time PDF Preview",
      "Download as PDF",
      "No Login Required",
      "Responsive Design",
    ].map((feature, i) => (
      <div
        key={i}
        className="
          bg-white/30
          backdrop-blur-lg
          border border-white/20
          rounded-2xl
          shadow-xl
          p-7
          transition
          hover:scale-105
          hover:shadow-2xl
          hover:bg-white/50
          duration-300
          flex items-center justify-center
          min-h-[120px]
        "
      >
        <p className="text-gray-900 font-body2 text-lg font-medium drop-shadow-sm">
          {feature}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default Landing;
