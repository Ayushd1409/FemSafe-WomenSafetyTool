import React from 'react';

function Testimonial() {
  const cardsData = [
    {
      title: "Recognize Unsafe Situations",
      description: "Learn how to identify red flags in your surroundings and stay alert in public spaces.",
      image: "https://wonkhe.com/wp-content/wonkhe-uploads/2022/12/wonkhe-harass-2280x1282.jpg", 
    },
    {
      title: "Self-Defense Tips",
      description: "Empower yourself with simple self-defense techniques to protect yourself in emergencies.",
      image: "https://static.vecteezy.com/system/resources/previews/011/976/733/non_2x/self-defense-practice-and-martial-arts-training-for-fighting-criminals-in-battle-on-flat-cartoon-illustration-vector.jpg", 
    },
    {
      title: "Know Your Rights",
      description: "Understand the laws related to women’s safety and harassment to advocate for yourself effectively.",
      image: "https://wonkhe.com/wp-content/wonkhe-uploads/2023/02/00029727-2048x1152.jpg", 
    },
    {
      title: "Helplines and Resources",
      description: "Access a list of helplines, local organizations, and support networks available for women.",
      image: "https://farorelaw.co.uk/wp-content/uploads/2024/10/Whistleblowing-pic-1.jpg", 
    },
  ];

  return (
    <div>
      <section className="my-16 sm:p-24 p-10">
        <h3 className="text-3xl font-bold text-center mb-10">
          Women Awareness & Self-Defense
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mb-4 w-full h-44 object-cover rounded-lg"
              />
              <h4 className="text-lg font-bold mb-2 text-center">{card.title}</h4>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
