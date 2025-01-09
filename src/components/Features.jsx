import React from "react";

function Features() {
  const features = [
    {
      title: "Incident Reporting",
      description: "Easily report safety concerns with a seamless and user-friendly interface.",
      icon: "📋", 
    },
    {
      title: "Voice-to-Text Input",
      description: "Incident can be reported using voice and it is convert to text. ",
      icon: "🗣️",
    },
    {
      title: "Support Networks",
      description: "Connect with legal aid, counseling, and local support networks for assistance.",
      icon: "🤝",
    },
    {
      title: "Feedback Mechanism",
      description: "Provide feedback to continuously improve the platform for better user experience.",
      icon: "💬",
    },
    {
      title: "Secure Evidence Upload",
      description: "Upload images, videos, or documents securely to support your report.",
      icon: "🔒",
    },
    {
      title: "Anonymous Reporting",
      description: "Report incidents anonymously to ensure privacy and security.",
      icon: "🙈",
    },
  ];

  return (
    <div>
      <section className="my-16 sm:px-24 px-10">
        <h3 className="text-3xl font-bold text-center mb-10">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-indigo-600 mb-4 text-center">{feature.icon}</div>
              <h4 className="text-xl font-bold text-center mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
