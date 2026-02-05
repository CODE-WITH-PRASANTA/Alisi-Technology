import React from "react";

const TestimonialList = ({ testimonials, onEdit, onDelete }) => {

  return (
    <div className="adm-testimonial-list">

      <h2 className="adm-list-title">Manage Testimonials</h2>

      {testimonials.length === 0 && (
        <p className="adm-empty-text">No testimonials added yet.</p>
      )}

      {testimonials.map(item => (
        <div className="adm-testimonial-card" key={item.id}>

          <img
            src={item.photo}
            alt="client"
            className="adm-client-photo"
          />

          <div className="adm-card-content">

            {/* NAME */}
            <h4 className="adm-client-name">
              {item.name}
            </h4>

            {/* POSITION */}
            <p className="adm-client-position">
              {item.position}
            </p>

            {/* FEEDBACK */}
            <p className="adm-feedback-text">
              {item.feedback}
            </p>

            {/* RATING */}
            <div className="adm-rating-view">
              {"★".repeat(item.rating)}
            </div>

            {/* ACTIONS */}
            <div className="adm-card-actions">

              <button
                className="adm-edit-btn"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>

              <button
                className="adm-delete-btn"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default TestimonialList;
