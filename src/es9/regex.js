const regex_data = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regex_data.exec("2020-10-28")
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);