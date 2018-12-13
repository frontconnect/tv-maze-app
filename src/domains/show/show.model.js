class ShowImage {
  medium ='';
  original = '';
}

export class ShowModel {
  title = '';
  description = '';
  coverImage = new ShowImage();
  episodes = [];
}

export class ShowModelSerializer {
  static fromJson(json) {
    const showObj = new ShowModel();
    showObj.title = json.name;
    showObj.description = json.summary;

    showObj.coverImage = new ShowImage();
    showObj.coverImage.original = json.image.original;
    showObj.coverImage.medium = json.image.medium;
    return showObj;
  }
}

export default {
  ShowModel,
  ShowModelSerializer,
};
