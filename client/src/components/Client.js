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


const getEntries = () =>
  fetch('/entries?_sort=time_entry', {
    accept: 'application/json',
    mode: 'cors'
  }).then(checkStatus)
  .then((parseJSON));

const Client = {getEntries};

export default Client;
