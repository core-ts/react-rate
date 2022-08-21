import * as React from 'react';
import '../rate.css';
export var DetailStar5 = function (rateInfo) {
  if (!rateInfo) {
    return;
  }
  var list = [];
  var totalRate = rateInfo.rate1 + rateInfo.rate2 + rateInfo.rate3 + rateInfo.rate4 + rateInfo.rate5;
  for (var i = 5; i > 0; i--) {
    var rate = "rate" + i;
    var value = rateInfo[rate];
    var percent = 0;
    if (totalRate !== 0) {
      percent = (value * 100) / totalRate;
    }
    var numberStar = Array(i)
      .fill(React.createElement("i", null))
      .map(function (_, index) {
        return React.createElement("i", { key: index });
      });
    var startDiv = React.createElement("div", { className: 'rv-star' }, numberStar);
    var endDiv = (React.createElement("div", { key: i, className: 'progress' },
      React.createElement("span", { style: { width: percent + "%" } })));
    var rateDiv = (React.createElement("div", { key: i, className: 'detail' },
      startDiv,
      endDiv));
    list.push(rateDiv);
  }
  return list;
};
export var DetailStar10 = function (rateInfo) {
  if (!rateInfo) {
    return;
  }
  var list = [];
  var totalRate = rateInfo.rate1 +
    rateInfo.rate2 +
    rateInfo.rate3 +
    rateInfo.rate4 +
    rateInfo.rate5 +
    rateInfo.rate6 +
    rateInfo.rate7 +
    rateInfo.rate8 +
    rateInfo.rate9 +
    rateInfo.rate10;
  for (var i = 10; i > 0; i--) {
    var rate = "rate" + i;
    var value = rateInfo[rate];
    var percent = 0;
    if (totalRate !== 0) {
      percent = (value * 100) / totalRate;
    }
    var numberStar = Array(i)
      .fill(React.createElement("i", null))
      .map(function (_, index) {
        return React.createElement("i", { key: index });
      });
    var startDiv = React.createElement("div", { className: 'rv-star' }, numberStar);
    var endDiv = (React.createElement("div", { key: i, className: 'progress' },
      React.createElement("span", { style: { width: percent + "%" } })));
    var rateDiv = (React.createElement("div", { className: 'detail' },
      startDiv,
      endDiv));
    list.push(rateDiv);
  }
  return list;
};
