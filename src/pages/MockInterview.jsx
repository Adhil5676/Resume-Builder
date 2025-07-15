import React, { useState, useRef } from "react";

const questions =[
  {
    "question": "Tell me about yourself.",
    "answer": "I’m a passionate full-stack developer with a focus on building modern web applications. I enjoy working with React, Java, and MySQL. Recently, I built a resume builder project to enhance user experience and responsiveness."
  },
  {
    "question": "What are your strengths?",
    "answer": "I’m a quick learner, good at problem-solving, and I have strong communication skills. I also enjoy collaborating with teams to deliver clean, scalable code."
  },
  {
    "question": "What are your weaknesses?",
    "answer": "I sometimes get too focused on details, which can slow me down. However, I’m learning to balance quality with efficiency by setting clear priorities and deadlines."
  },
  {
    "question": "Why do you want this job?",
    "answer": "I’m excited about this role because it aligns with my skills and interests, especially in full-stack development. I admire your company’s commitment to innovation and believe I can contribute to your ongoing projects."
  },
  {
    "question": "Where do you see yourself in 5 years?",
    "answer": "In five years, I see myself as a senior developer, leading projects and mentoring junior team members. I hope to grow with the company and take on more responsibilities."
  },
  {
    "question": "Describe a challenging situation and how you overcame it.",
    "answer": "In my previous job, we faced a tight deadline for a major release. I coordinated with my team, broke down tasks, and worked overtime to ensure we delivered on time. The project was a success, and I learned the importance of teamwork and time management."
  },
  {
    "question": "How do you handle tight deadlines?",
    "answer": "I prioritize tasks, break them into manageable steps, and communicate clearly with my team. I also stay focused and avoid distractions to ensure I meet deadlines without compromising quality."
  },
  {
    "question": "How do you handle feedback or criticism?",
    "answer": "I see feedback as an opportunity to improve. I listen carefully, ask questions if needed, and apply the suggestions to my work. It helps me grow both professionally and personally."
  },
  {
    "question": "Can you work under pressure?",
    "answer": "Yes, I can. I stay calm, organize my tasks, and focus on solutions rather than problems. Working under pressure has helped me develop resilience and adaptability."
  },
  {
    "question": "Why should we hire you?",
    "answer": "I have the technical skills and experience you’re looking for, and I’m passionate about continuous learning. I’m confident I can make a positive impact on your team and help achieve your goals."
  },
  {
    "question": "What motivates you?",
    "answer": "I’m motivated by solving challenging problems and seeing the impact of my work. Learning new technologies and collaborating with talented people also inspires me."
  },
  {
    "question": "Do you prefer to work independently or as part of a team?",
    "answer": "I’m comfortable with both. I enjoy collaborating with teams to share ideas and solve problems, but I can also work independently and manage my own tasks efficiently."
  }
];

const MockInterview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [note, setNote] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  
  const startRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/mp3" });
      setAudioURL(URL.createObjectURL(audioBlob));
      audioChunks.current = [];
    };

    mediaRecorderRef.current.start();
  };

 
  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current.stop();
  };

  

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
    setNote("");
    setAudioURL(null);
    setShowAnswer(false);
  };

  return (
  <div className="min-h-screen flex items-center justify-center ">
    <div className="w-full max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900 tracking-tight drop-shadow-lg font-body1" >
         Mock Interview Practice
      </h2>

      <div className="relative bg-white/40 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 transition-all duration-300">
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-white/20 blur-2xl"></div>
        </div>

        <p className="text-xl font-semibold mb-6 text-gray-900/90">
          Q{currentIndex + 1}: {questions[currentIndex].question}
        </p>

        
        <div className="flex gap-4 mb-6">
          {!isRecording ? (
            <button
              onClick={startRecording}
              className="px-5 py-2.5 bg-gradient-to-r from-green-400/80 to-green-600/80 text-white font-medium rounded-xl shadow hover:from-green-500 hover:to-green-700 transition"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="px-5 py-2.5 bg-gradient-to-r from-red-400/80 to-red-600/80 text-white font-medium rounded-xl shadow hover:from-red-500 hover:to-red-700 transition"
            >
              Stop Recording
            </button>
          )}

          {audioURL && (
            <audio controls src={audioURL} className="mt-2 rounded-lg bg-white/60 backdrop-blur" />
          )}
        </div>

        
        <textarea
          rows={4}
          placeholder="📝 Write your thoughts or answer here..."
          className="w-full p-4 bg-white/60 border border-white/30 rounded-xl mb-6 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        ></textarea>

        
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mb-4 px-5 py-2.5 bg-gradient-to-r from-purple-400/80 to-purple-600/80 text-white font-medium rounded-xl shadow hover:from-purple-500 hover:to-purple-700 transition"
        >
          {showAnswer ? "Hide AI Answer" : "Show AI Answer"}
        </button>

        
        {showAnswer && (
          <div className="mt-6 flex items-start gap-4">
            <img
              src="https://api.dicebear.com/7.x/bottts/svg?seed=AI"
              alt="AI Avatar"
              className="w-12 h-12 rounded-full border-2 border-white/60 shadow"
            />
            <div className="bg-gradient-to-br from-purple-500/80 to-indigo-500/80 text-white px-5 py-4 rounded-2xl rounded-bl-none max-w-xl shadow-lg backdrop-blur-md">
              <p className="text-base">
                <span className="font-semibold block mb-2">🤖 AI Answer:</span>
                {questions[currentIndex].answer}
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-8">
          <button
            onClick={nextQuestion}
            className="px-7 py-2.5 bg-gradient-to-r from-indigo-400/80 to-indigo-700/80 text-white font-semibold rounded-xl shadow hover:from-indigo-500 hover:to-indigo-800 transition"
          >
            Next Question →
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default MockInterview;
