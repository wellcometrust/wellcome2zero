import React, { useState } from 'react';
import './button.css';

function Metric({ label, incUnit = "1", metricType = 'positive' }) {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const inc = parseFloat(incUnit, 10);
    const metricActiveClass = isActive ?
        'metric--active' :
        '';

    const handleItemClick = (v) => {
        if (count + v >= 0) {
            setCount(count + v);
        }

        if (count + v > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <div className={`metric metric--${metricType} ${metricActiveClass}`}>
            <button onClick={() => handleItemClick(inc)} className="btn btn--up">up</button>
            <span>{label}</span>
            <span className="metric-count">{count}</span>
            <button onClick={() => handleItemClick(-inc)} className="btn btn--down">down</button>
        </div>
    );
}

export default Metric;
