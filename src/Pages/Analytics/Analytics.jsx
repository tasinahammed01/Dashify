import React from "react";
import Section1 from "../../Components/AnalyticsCompo/Section1/Section1";
import Section2 from "../../Components/AnalyticsCompo/Section2/Section2";
import Section3 from "../../Components/AnalyticsCompo/Section3/Section3";
import Section4 from "../../Components/AnalyticsCompo/Section4/Section4";

const Analytics = () => {
  return (
    <div className="px-3 md:px-10 py-10 space-y-10">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
};

export default Analytics;
