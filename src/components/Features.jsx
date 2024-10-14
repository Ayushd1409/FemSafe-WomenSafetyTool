import React from 'react'

function Features() {
  return (
    <div>

<section className="my-16">
          <h3 className="text-xl font-bold text-center mb-6">OUR FEATURES</h3>
          <ul className="space-y-4 text-center text-gray-600">
            {Array(5)
              .fill(
                "Designed to connect, protect, and empower, the platform integrates advanced features for seamless reporting, instant alerts, and community support."
              )
              .map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
          </ul>
        </section>

    </div>
  )
}

export default Features