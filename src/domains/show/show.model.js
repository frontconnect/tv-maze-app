import { CoverImage } from '../common/coverImage/coverImage.model';

export class Show {
  id = '';
  title = '';
  description = '';
  coverImage = new CoverImage();
  episodes = [];
}

export class ShowSerializer {
  static fromJson(json) {
    const showObj = new Show();
    showObj.id = json.id;
    showObj.title = json.name;
    showObj.description = json.summary;

    showObj.coverImage = new CoverImage();
    showObj.coverImage.original = json.image.original;
    showObj.coverImage.medium = json.image.medium;
    return showObj;
  }
}

