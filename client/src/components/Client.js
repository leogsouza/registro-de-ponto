import moment from 'moment';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
}

const parseJSON = (response) => response.json();

const prepareEntries = (entries) => {
  return entries.map( (entry) => {
    const date = moment(entry.time_entry).format("DD/MM/YYYY");
    const time = moment(entry.time_entry).format("HH:mm");

    return {date: date, time: time};
  }).reduce((acum, item) => {
    const key = item.date;

    acum[key] = acum[key] || [];
    acum[key].push(item.time);

    return acum;
  },{});
}


const getEntries = () =>
  fetch('/entries?_sort=time_entry', {
    accept: 'application/json',
    mode: 'cors'
  }).then(checkStatus)
  .then((parseJSON))
  .then(prepareEntries);

const Client = {getEntries};

export default Client;
