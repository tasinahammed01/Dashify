import React from "react";

const Analytics = () => {
  return (
    <div className="px-10 py-10">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        <div className="px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full">
          <div className="text-base-400 pb-5">Unique Visitors</div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">24.4K</div>
            <div className="flex items-center gap-2 md:gap-5 text-sm text-gray-500">
              <span className="bg-green-200 px-2 py-1 rounded-2xl text-green-600">
                +12%
              </span>
              from last month
            </div>
          </div>
        </div>

        <div className="px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full">
          <div className="text-base-400 pb-5">Total Pageviews</div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">55.9K</div>
            <div className="flex items-center gap-2 md:gap-5 text-sm text-gray-500">
              <span className="bg-green-200 px-2 py-1 rounded-2xl text-green-600">
                +4%
              </span>
              from last month
            </div>
          </div>
        </div>

        <div className="px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full">
          <div className="text-base-400 pb-5">Bounce Rate</div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">54%</div>
            <div className="flex items-center gap-2 md:gap-5 text-sm text-gray-500">
              <span className="bg-red-200 px-2 py-1 rounded-2xl text-red-600">
                -1.59%
              </span>
              from last month
            </div>
          </div>
        </div>

        <div className="px-4 md:px-7 py-8 bg-base-200 rounded-lg shadow-md w-full">
          <div className="text-base-400 pb-5">Visit Duration</div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">2m 56s</div>
            <div className="flex items-center gap-2 md:gap-5 text-sm text-gray-500">
              <span className="bg-green-200 px-2 py-1 rounded-2xl text-green-600">
                +7%
              </span>
              from last month
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
