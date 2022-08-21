import * as React from 'react';
import { useState } from 'react';
import '../rate.css';
export var RatingStar = function (_a) {
  var rateRange = _a.rateRange, setIsOpenRateModal = _a.setIsOpenRateModal, setVoteStar = _a.setVoteStar, ratingText = _a.ratingText;
  var _b = useState(''), currClass = _b[0], setCurrClass = _b[1];
  var _c = useState(), rateClassName = _c[0], setRateClassName = _c[1];
  var generateRatingClasses = function (n) {
    var className = ['rate'];
    for (var i = 1; i <= n; i++) {
      className.push("star-" + i);
    }
    return className.join(' ');
  };
  var handleOnclick = function (n) {
    setVoteStar(n);
    setIsOpenRateModal(true);
  };
  var handleOnMouseEnter = function (n) {
    var rateClass = generateRatingClasses(n);
    setRateClassName(rateClass);
  };
  var handleOnMouseLeave = function () {
    setRateClassName(currClass);
  };
  return (React.createElement('div', { className: 'col s12 m12 l12 rating' }, React.createElement('p', null, ratingText),
    // tslint:disable-next-line:only-arrow-functions
    React.createElement('div', { className: rateClassName + ' rate' }, Array.from(Array(rateRange).keys()).map(function (item) { return React.createElement('i', { key: item, onClick: function () { return handleOnclick(item + 1); }, onMouseEnter: function () { return handleOnMouseEnter(item + 1); }, onMouseLeave: function () { return handleOnMouseLeave(); } }); }))));
  /*
  return (
    <div className='col s12 m12 l12 rating'>
      <p>{ratingText}</p>
      <div className={rateClassName + ' rate'} >
        {
          Array.from(Array(rateRange).keys()).map(item => <i
            key={item}
            onClick={() => handleOnclick(item + 1)}
            onMouseEnter={() => handleOnMouseEnter(item + 1)}
            onMouseLeave={() => handleOnMouseLeave()}
          />
          )
        }
      </div>
    </div>
  );*/
};
