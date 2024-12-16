import React from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {id: 1, name: 'John Doe', feedback: 'Amazing quality and service!'},
    {id: 2, name: 'Jane Smith', feedback: 'Highly recommend Stonepedia!'},
  ]

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
