export enum ApiRoute {
  USER = '/user',
  RESUME = '/resume',
  CONTACT = '/contact'
}

export class Utils {
  static normalize(entityArray: Entity[]) {
    return entityArray.reduce((entities: { [id: number]: Entity }, entity: Entity) => {
      return {
        ...entities, ...{
          [entity._id]: entity
        }
      };
    }, {});
  }

  static removeKey(obj, deleteKey) {
    return Object.keys(obj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = obj[current];
        return result;
      }, {});
  }

  static filterDuplicateIds(ids: number[]) {
    return ids.filter((elem, index, self) => index === self.indexOf(elem));
  }
  static getYoutubeUrlFromId(id: string): string {
    return 'https://www.youtube.com/watch?v=' + id;
  }

}



interface Entity {
  _id: number;
}
