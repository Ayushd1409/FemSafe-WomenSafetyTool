import React from 'react'

function Features() {
  return (
    <div>

<section className="my-16">
          <h3 className="text-2xl font-bold text-center mb-6">OUR FEATURES</h3>
          <ul className="space-y-4 text-lg text-center text-gray-600">
            {Array(1)
              .fill(
                "Seamless incident reporting for safety concerns."
              )
              .map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
              {Array(1)
              .fill(
                "Secure evidence upload for images, videos, or documents."
              )
              .map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
              {Array(1)
              .fill(
                "Connection to support networks, legal aid, and counseling services."
              )
              .map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
              {Array(1)
              .fill(
                "Feedback mechanism to improve user experience."
              )
              .map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
              {Array(1)
              .fill(
                "Option for anonymous reporting to protect privacy."
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