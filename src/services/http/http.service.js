import { Observable, throwError } from 'rxjs';
import { first } from 'rxjs/operators';

class HttpService {
  constructor() {
    const headers = {
      'Content-Type': 'text/plain',
    };

    this.defaultConfig = {
      headers,
    };
  }

  request(url, config) {
    const fetchObservable = Observable.create(observer => {
      fetch(url, {...this.defaultConfig, ...config})
        .then(response => {
          const success = response.status >= 200 && response.status < 300;
          if (success) return response;

          return throwError(response);
        })
        .then(response => {
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
    return fetchObservable.pipe(first());
  }

  get(url) {
    const config = {
      method: 'GET',
    };

    return this.request(url, config);
  }
}

export default new HttpService();
