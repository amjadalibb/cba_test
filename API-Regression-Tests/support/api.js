const { axios, urlJoin} = require('../support');

const requestAPI = (options) =>
  new Promise(async resolve => {
    axios({
      method: options.method,
      url: urlJoin(options.baseURL, options.endpoint),
      auth: options.auth,
      data: options.body,
      headers: options.headers,
      params: options.params
    }).then(
      async function(response) {
        return resolve(response);
      },
      err => resolve(err.response)
    );
  });

module.exports = {
  requestAPI
};
