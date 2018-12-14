import HttpService from '../../services/http';
import { baseUrl } from '../../config/endpoint';
import { map } from 'rxjs/operators';
import { ShowSerializer } from './show.model';

class ShowService {
  getShow(showId) {
    const showUrl = `${baseUrl}/shows/${showId}`;
    return HttpService.get(showUrl)
      .pipe(
        map((response) => {
          return ShowSerializer.fromJson(response);
        })
      );
  }
}

export default new ShowService();
