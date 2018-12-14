export class Episode {
  id = '';
  season = 0;
  title = '';
  airDate = '';
}

export class EpisodeSerializer {
  static fromJson(json) {
    const episode = new Episode();
    episode.id = json.id;
    episode.season = Number(json.season);
    episode.title = json.title;
    episode.airDate = json.airDate;
  }
}
