import HttpService from '../../services/http';
import { baseUrl } from '../../config/endpoint';
import { map } from 'rxjs/operators';
import { EpisodeSerializer } from './episode.model';

class EpisodeService {
  getEpisodes(showId) {
    const showUrl = `${baseUrl}/shows/${showId}/episodes`;
    return HttpService.get(showUrl)
      .pipe(
        map((episodes) => {
          return episodes.map((episode) => {
            return EpisodeSerializer.fromJson(episode);
          });
        })
      );
  }

  getEpisodesInSeasonContainer(showId) {
    return this.getEpisodes(showId)
      .pipe(
        map((episodes) => {
          return episodes.reduce((seasonContainer, episode) => {
            const season = episode.season;
            if (seasonContainer[season]) {
              seasonContainer.push(episode);
              return seasonContainer;
            }

            seasonContainer[season] = [episode];
            return seasonContainer;
          }, {});
        })
      );
  }
}

export default new EpisodeService();
