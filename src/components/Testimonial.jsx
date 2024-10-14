import React from 'react'

function Testimonial() {
  return (
    <div>
        <section className="my-16 p-20">
          <h3 className="text-xl font-bold text-center mb-6">OUR TESTIMONIALS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Card Title 1", "Card Title 2", "Card Title 3", "Card Title 4"].map(
              (title, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">{title}</h4>
                  <p className="text-gray-600">This is a description for the {title.toLowerCase()}.</p>
                </div>
              )
            )}
          </div>
        </section>
    </div>
  )
}

export default Testimonial