import React from 'react';

const MoreInfoPart1 = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      {/* Phone Number Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Educational Attainment
        </label>
        <input
          onChange={(e) => setData({ ...data, educattainment: e.target.value })}
          value={data.educattainment}
          type="text"
          id="educattainment"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Favorite Food Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Professional Exam
        </label>
        <input
          onChange={(e) => setData({ ...data, profexam: e.target.value })}
          value={data.profexam}
          type="text"
          id="profexam"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default MoreInfoPart1;
