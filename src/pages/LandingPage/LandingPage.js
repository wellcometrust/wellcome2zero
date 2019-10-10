import React from 'react';
import Metric from "../../components/Metric/Metric";

export const LandingPage = () => (
  <div>
      <h2>Today</h2>
    <div className="options">
        <Metric
    label="stairs taken"
        />
        <Metric
    label="items recycled"
        />
        <Metric
    label="vegan meals"
        />
    </div>

    <div className="options">
        <Metric
            label="wasted meals"
            metricType="negative"
        />
        <Metric
            label="plastic bottles"
            metricType="negative"
        />
    </div>
  </div>
);

export default LandingPage;
