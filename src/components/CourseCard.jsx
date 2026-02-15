import React from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

const CourseCard = ({
  duration = '20 Hours',
  rating = 5,
  reviewCount = 25,
  title = 'Management Consultants in Competitive Markets',
  authorName = 'Guy Hawkins',
  authorRole = 'PRODUCT MANAGER',
  price = '$473.00',
  lessonCount = '16 LESSONS',
  isFavorite = false,
  onFavoriteClick = () => {}
}) => {
  return (
    <div className="w-[210px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    
      <div className="relative h-[130px] bg-[#2d4356] pt-3 px-3">
       
        <button
          onClick={onFavoriteClick}
          className="w-8 h-8 bg-[#ff8534] rounded-full flex items-center justify-center transition-transform hover:scale-110 z-10 relative"
        >
          {isFavorite ? (
            <FaHeart className="text-white text-sm" />
          ) : (
            <FaRegHeart className="text-white text-sm" />
          )}
        </button>


        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#ff8534]">
          <div className="absolute inset-0 bg-[#2d4356] rounded-b-[100%_100%]" />
        </div>
      </div>


      <div className="px-4 py-4 bg-white">
   
        <div className="mb-2">
          <span className="inline-block bg-[#34445a] text-white text-[10px] font-semibold px-2.5 py-1 rounded">
            {duration}
          </span>
        </div>


        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? 'text-[#ff8534]' : 'text-gray-300'}
              size={12}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">
            ({reviewCount} Reviews)
          </span>
        </div>

     
        <h3 className="text-[#2d4356] text-sm font-bold leading-tight mb-4">
          {title}
        </h3>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#2d4356] rounded-full flex-shrink-0" />
            <div>
              <p className="text-[#2d4356] text-[11px] font-bold leading-tight">
                {authorName}
              </p>
              <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wide">
                {authorRole}
              </p>
            </div>
          </div>

      
          <div className="text-right">
            <p className="text-[#2d4356] text-sm font-bold">
              {price}
            </p>
            <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wide">
              {lessonCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;