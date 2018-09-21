import {isPlatformBrowser} from '@angular/common';

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

  static isPlatformBrowser(): boolean {
    return isPlatformBrowser('browser');
  }

  static isMobile(): boolean {
    // https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|mobile|CriOS/i.test(ua)) {
      return true;
    }
    return false;
  }
}


interface Entity {
  _id: number;
}

export const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
export const Levels = ['basic', 'intermediate', 'advance'];

export const Templates = [{id: 1, src: '../../../../assets/images/1.png', name: 'Blues Template'},
  {id: 2, src: '../../../../assets/images/2.png', name: 'Modern Template'},
  {id: 3, src: '../../../../assets/images/3.png', name: 'Royal Template'},
  {id: 4, src: '../../../../assets/images/4.png', name: 'Traditional Template'},
  {id: 5, src: '../../../../assets/images/5.png', name: 'Classic Template'},
];

export enum TemplateType {
  BLUES_TEMPLATE = 1,
  MODERN_TEMPLATE = 2,
  ROYAL_TEMPLATE = 3,
  TRADITIONAL_TEMPLATE = 4,
  CLASSIC_TEMPLATE = 5
}

export enum Orientation {
  LANDSCAPE_LEFT = 90,
  LANDSCAPE_RIGHT = -90,
  PORTRAITE = 0,
}
