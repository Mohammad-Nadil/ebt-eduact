import React from 'react'

const card = () => {
  return (
    <div>
           <div className="relative bg-[#152B4A] w-[416px] h-[488px] rounded-3xl hover:shadow-xl transition-all">
              
              <div className="bg-white w-[356px] h-[216px] rounded-2xl p-6 absolute top-[300px] left-[30px]">
                <div className="flex justify-between mb-3">
                  <span className="bg-[#4F5DE4] text-white px-4 py-1 rounded-2xl text-xs">Development</span>
                  <span className="text-orange-500 text-sm font-semibold font-urbanist">26 Mar, 2023</span>
                </div>
                <h3 className="text-[24px] font-urbanist text-[#2A254D] font-bold mb-4">The Complete Web <br /> Developer Guideline 2023</h3>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#152B4A]"></div>
                    <div>
                      <p className="text-[16px] text-[#2A254D] leading-[26px] font-urbanist font-bold">Darrell Steward</p>
                      <p className="text-xs text-gray-500">FRONTEND DEVELOPER</p>
                    </div>
                  </div>
                  <div className="w-[40px] h-[40px] rounded-full border border-[#F57005] text-[#697585] flex items-center justify-center">→</div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default card