class ShowImage {
  medium = '';
  original = '';
}

export class Show {
  title = '';
  description = '';
  coverImage = new ShowImage();
  episodes = [];
}

export class ShowSerializer {
  static fromJson(json) {
    const showObj = new Show();
    showObj.title = json.name;
    showObj.description = json.summary;

    showObj.coverImage = new ShowImage();
    showObj.coverImage.original = json.image.original;
    showObj.coverImage.medium = json.image.medium;
    return showObj;
  }
}

