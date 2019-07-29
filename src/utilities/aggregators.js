export const indexHours = (numberDateList, personArrayList) => {
  let personList = [];

  personArrayList.forEach(personArray => {
    let personObj;
    if (personArray[0] === '') {
      return;
    }
    personArray.forEach((personData, index) => {
      if (index === 0) {
        let matches = personData.match(/\((.*?)\)/);
        name = matches ? matches[1] : personData;
        personObj = {
          name: name,
          charName: name.substring(0, 1).toUpperCase(),
          totalHours: 0,
          weekdayHours: 0,
          weekendHours: 0,
          longestStreak: 0,
          checkStreak: 0,
          checkHoliday: 0
        };
      } else {
        let numericHourValue = +personData;
        if (numericHourValue && numericHourValue > 0) {
          aggregateTotalHours(personObj, numericHourValue);
          aggregateWeekdayHours(personObj, numericHourValue, numberDateList[index]);
          aggregateWeekendHours(personObj, numericHourValue, numberDateList[index]);
          checkStreak(personObj, numericHourValue);
        } else {
          checkStreak(personObj, numericHourValue);
          aggregateHolidayAndPTO(personObj, personData);
        }
      }
    });
    personList.push(personObj);
  });
  return personList;
};

const aggregateTotalHours = (personObj, hourValue) => {
  personObj.totalHours += hourValue;
};

const aggregateWeekdayHours = (personObj, hourValue, dayValue) => {
  if (dayValue !== 'SA' && dayValue !== 'SU') {
    personObj.weekdayHours += hourValue;
  }
};

const aggregateWeekendHours = (personObj, hourValue, dayValue) => {
  if (dayValue === 'SA' || dayValue === 'SU') {
    personObj.weekendHours += hourValue;
  }
};

const checkStreak = (personObj, hourValue) => {
  if (hourValue > 0) {
    personObj.checkStreak += 1;
    personObj.longestStreak =
      personObj.checkStreak > personObj.longestStreak ? personObj.checkStreak : personObj.longestStreak;
  } else {
    personObj.checkStreak = 0;
  }
};

const aggregateHolidayAndPTO = (personObj, hourValue) => {
  if (hourValue === 'H') {
    personObj.checkHoliday += 8;
  } else if (hourValue === 'V/10') {
    personObj.checkHoliday += 10;
  } else if (hourValue === 'V') {
    personObj.checkHoliday += 8;
  }
};
