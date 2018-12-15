import { CoverImage } from '../common/coverImage/coverImage.model';

export class Episode {
  id = '';
  season = 0;
  number = 0;
  title = '';
  airDate = '';
  url = '';
  description = '';
  coverImage = new CoverImage();
}

export class EpisodeSerializer {
  static fromEpisodesEndPoint(json, showId) {
    const episode = new Episode();
    episode.id = json.id.toString();
    episode.season = Number(json.season);
    episode.number = Number(json.number);
    episode.title = json.name;
    episode.airDate = json.airdate;
    episode.url = `/shows/${showId}/episodes/${json.season}/${json.number}`;
    return episode;
  }

  static fromEpisodeByNumberEndPoint(json) {
    const episode = new Episode();
    episode.id = json.id;
    episode.title = json.name;
    episode.description = json.summary;

    if (json.image) {
      episode.coverImage.original = json.image.original;
      episode.coverImage.medium = json.image.medium;
    } else {
      const noImage = '//static.tvmaze.com/images/no-img/no-img-landscape-text.png';
      episode.coverImage.original = noImage;
      episode.coverImage.medium = noImage;
    }
    return episode;
  }
}
