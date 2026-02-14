import { FaHeart, FaStar } from "react-icons/fa";

export default function CourseCard({
  image,
  duration,
  rating,
  reviews,
  title,
  instructorName,
  instructorRole,
  price,
  lessons,
  isFavorite = false,
}) {
  return (
    <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden relative hover:shadow-xl transition duration-300">
      
      {/* Top Image Section */}
      <div className="relative">
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-70 h-40 bg-orange-500 rounded-b-full z-0" />

        {image ? (
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover rounded-b-[100px] relative z-10"
          />
        ) : (
          <div className="h-60 bg-slate-800 rounded-b-[150px] relative z-10" />
        )}

        <button className="absolute top-4 left-4 bg-orange-500 p-2 rounded-full shadow-md z-20">
          <FaHeart
            size={16}
            className={`${isFavorite ? "fill-white text-white" : "text-white"}`}
          />
        </button>
      </div>

      <div className="p-6 pt-10">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md">
          {duration}
        </span>

        <div className="flex items-center mt-3 text-sm text-gray-600">
          <div className="flex text-orange-500 mr-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={14}
                className={
                  index < Math.round(rating)
                    ? "fill-orange-500 text-orange-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span>({reviews} Reviews)</span>
        </div>

        <h3 className="mt-3 h-10 text-lg font-semibold text-gray-800 leading-snug">
          {title}
        </h3>

        <div className="mt-5 flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-800 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {instructorName}
              </p>
              <p className="text-xs text-gray-500">
                {instructorRole}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-gray-800">
              ${price}
            </p>
            <p className="text-xs text-gray-500">
              {lessons} Lessons
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
