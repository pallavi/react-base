import QueryString from 'qs';

class Api {
  constructor (uri) {
    this.uri = uri;
  }

  async checkStatus (response) {
    const resp = await response.json();
    if (response.status >= 200 && response.status < 300) {
      return resp;
    }
    const error = new Error(resp.error);
    error.status = response.status;
    throw error;
  }

  async request (method, endpoint, payload, query) {
    const headers = {
      'content-type': 'application/json; charset=utf-8'
    };

    let body = undefined;
    if (payload) {
      body = JSON.stringify(payload);
    }

    let uri = `${this.uri}/${endpoint}`;
    if (query) {
      const queryString = QueryString.stringify(query, { indices: false });
      uri = `${uri}?${queryString}`;
    }

    const response = await fetch(uri, {
      method,
      headers,
      body
    });

    return this.checkStatus(response);
  }
}

export default new Api();
