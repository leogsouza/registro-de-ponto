import Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText)
    console.log('error', response);
    error.response = response;
    throw error;
  }
}

const parseJSON = (response) => response.json();

const allDays = () => {
  const begin = moment().format("YYYY-MM-01");
  const end = moment().format("YYYY-MM-")+ moment().daysInMonth();
  const range = moment.range(begin, end);

  const arrDates = Array.from(range.by('day'));
  return arrDates.map( itemDate => itemDate.format("DD/MM/YYYY"));

  //const arr = moment(begin).twix(end).toArray("days");
  //console.log(arr[0].format('LLL'));
}

const prepareEntries = (entries) => {
  const objEntries = entries.map( (entry) => {
    const date = moment(entry.time_entry).format("DD/MM/YYYY");
    const time = moment(entry.time_entry).format("HH:mm");

    return {date: date, time: time};
  }).reduce((acum, item) => {
    const key = item.date;

    acum[key] = acum[key] || [];
    acum[key].push(item.time);

    return acum;
  },{});

  /*const arrEntries = Object.entries(objEntries).map((item) => {
    const entry = item[1];
    entry.unshift(item[0])
    return entry;
  });*/

  return objEntries;
}



const getEntries = () =>
  fetch('/entries?_sort=time_entry', {
    accept: 'application/json',
    mode: 'cors'
  }).then(checkStatus)
  .then((parseJSON))
  .then(prepareEntries);

const saveEntry = (entry) =>{
  fetch('/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  });
  return getEntries();
};
const Client = {getEntries, allDays, saveEntry};

export default Client;
