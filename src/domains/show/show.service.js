import HttpService from '../../services/http';
import { baseUrl } from '../../config/endpoint';
import { map } from 'rxjs/operators';
import { ShowModelSerializer } from './show.model';

class ShowService {
  getShow(showId) {
    const showUrl = `${baseUrl}/shows/${showId}`;
    return HttpService.get(showUrl)
      .pipe(
        map((response) => {
          return ShowModelSerializer.fromJson(response);
        })
      );
  }
}

export default new ShowService();
