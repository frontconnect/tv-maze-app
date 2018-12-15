import HttpService from '../http/index';
import { baseUrl } from '../../config/endpoint';
import { map } from 'rxjs/operators';
import { ShowSerializer } from '../../domains/show/show.model';

class SearchService {
  singleSearchShow(showName) {
    const searchUrl = `${baseUrl}/singlesearch/shows?q=${showName}`;
    return HttpService.get(searchUrl)
      .pipe(
        map((response) => {
          return ShowSerializer.fromJson(response);
        })
      );
  }
}

export default new SearchService();
