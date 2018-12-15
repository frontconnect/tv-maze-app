import HttpService from '../../services/http';
import { baseUrl } from '../../config/endpoint';
import { map } from 'rxjs/operators';
import { EpisodeSerializer } from './episode.model';

class EpisodeService {
  getEpisodes(showId) {
    const episodesUrl = `${baseUrl}/shows/${showId}/episodes`;
    return HttpService.get(episodesUrl)
      .pipe(
        map((episodes) => {
          return episodes.map((episode) => {
            return EpisodeSerializer.fromEpisodesEndPoint(episode, showId);
          });
        })
      );
  }

  /*
   * Returns a season object in the following format:
   *
   * season = {
   *   1: [episode1, episode2, ...]
   *   2: [episode23, episode24, ...]
   *   3: [episode35, episode36, ...]
   *   .
   *   .
   *   .
   * }
   */
  getSeasonsByEpisodes(showId) {
    return this.getEpisodes(showId)
      .pipe(
        map((episodes) => {
          return episodes.reduce((seasons, episode) => {
            const season = episode.season;
            if (seasons[season]) {
              seasons[season].unshift(episode);
              return seasons;
            }

            seasons[season] = [episode];
            return seasons;
          }, {});
        })
      );
  }

  getEpisode({showId, season, number}) {
    const episodeUrl = `${baseUrl}/shows/${showId}/episodebynumber?season=${season}&number=${number}`;
    return HttpService.get(episodeUrl)
      .pipe(
        map((episode) => {
          return EpisodeSerializer.fromEpisodeByNumberEndPoint(episode);
        })
      );
  }
}

export default new EpisodeService();
