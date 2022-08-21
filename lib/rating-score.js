import * as React from 'react';
import '../rate.css';
var calculatorPercentStar = function (rate, rateRange) { return Number((rate * 100) / rateRange); };
export var ReviewScore = function (p) {
  return (React.createElement("div", { className: 'col s4 m5 l6 summary' },
    React.createElement("div", { className: 'score' },
      React.createElement("span", null, Math.ceil(p.rate * 100) / 100)),
    React.createElement("div", { className: 'average' },
      React.createElement("div", { className: p.rateRange === 5 ? 'empty-stars' : 'empty-stars-film' }),
      React.createElement("div", { className: p.rateRange === 5 ? 'full-stars' : 'full-stars-film', style: { width: (calculatorPercentStar(p.rate, p.rateRange) || 0) + "%" } }))));
};
