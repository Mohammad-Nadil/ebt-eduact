import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const CourseReviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reviews = [
    {
      id: 1,
      name: "David Shon",
      avatar: "",
      rating: 5,
      date: "Posted on March 15, 2023",
      comment:
        "lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh. Itern nec eras sit magnis hendrerit sagittis. Rutrum sed mi non vitae feugiat vulputat sit amet nec elit. Rlasellus id hendrerit quam. Sed eget suscipit massa, ac eleifend dolor.",
    },
    {
      id: 2,
      name: "Jhon Watchson",
      avatar: "",
      rating: 5,
      date: "Posted on March 15, 2023",
      comment:
        "lorem sit lacus ex nisl lobortum accumsan vitae vitae nibh. Itern nec eras sit magnis hendrerit sagittis. Rutrum sed mi non vitae feugiat vulputat sit amet nec elit. Rlasellus id hendrerit quam. Sed eget suscipit massa, ac eleifend dolor.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Review submitted:", { ...formData, rating });

    setFormData({ name: "", email: "", message: "" });
    setRating(0);
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#1e3a5f]">2 Reviews</h3>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4">
            <div className="w-20 h-20 bg-[#1e3a5f] rounded-full flex-shrink-0" />

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-base font-bold text-[#1e3a5f]">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
                </div>

                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < review.rating
                          ? "text-[#ff8534]"
                          : "text-gray-300"
                      }
                      size={14}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Add a Review</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1e3a5f] mb-3">
              Rate This Course
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <FaStar
                    className={
                      star <= (hoverRating || rating)
                        ? "text-[#ff8534]"
                        : "text-gray-300"
                    }
                    size={24}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8534] focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8534] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Write a Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write a Message"
              rows="6"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8534] focus:border-transparent transition-all resize-none"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#ff8534] hover:bg-[#e67529] text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              Leave a Review
              <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseReviews;
