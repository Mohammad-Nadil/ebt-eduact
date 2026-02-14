import React from 'react';

const Card = ({
  category = 'Development',
  categoryColor = '#4F5DE4',
  date = '26 Mar, 2023',
  title = 'The Complete Web Developer Guideline 2023',
  authorName = 'Darrell Steward',
  authorRole = 'FRONTEND DEVELOPER',
  backgroundColor = '#152B4A',
  authorAvatarColor = '#152B4A'
}) => {
  return (
    <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all"
         style={{ backgroundColor }}>
      
      <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[300px] left-[30px]">
        <div className="flex justify-between mb-3">
          <span 
            className="text-white px-4 py-1 rounded-2xl text-xs"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
          <span className="text-orange-500 text-sm font-semibold font-urbanist">
            {date}
          </span>
        </div>
        
        <h3 className="text-[24px] font-urbanist text-[#2A254D] font-bold mb-4">
          {title}
        </h3>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: authorAvatarColor }}
            />
            <div>
              <p className="text-[16px] text-[#2A254D] leading-[26px] font-urbanist font-bold">
                {authorName}
              </p>
              <p className="text-xs text-gray-500">
                {authorRole}
              </p>
            </div>
          </div>
          <div className="w-[40px] h-[40px] rounded-full border border-[#F57005] text-[#697585] flex items-center justify-center cursor-pointer hover:bg-orange-50 transition-colors">
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;