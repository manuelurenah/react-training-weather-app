const daysMap = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

const monthsMap = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

export const convertTemp = kelvin => (
    parseFloat(((kelvin - 273.15) * 1.8000) + 32.00).toFixed(2)
);

export const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const day = daysMap[date.getDay()];
    const month = `${monthsMap[date.getMonth()]} ${date.getDate()}`;

    return `${day}, ${month}`;
};
