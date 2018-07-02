import { Injectable } from '@angular/core';

@Injectable()

export class RecordsService {

  constructor() { }

  getData() {
    return  [
      {
        name: 'Cosinus',
        online: true
      },
      {
        name: 'Localhost',
        online: false
      },
      {
        name: 'DouxSey',
        online: true
      },
      {
        name: 'Rassoul',
        online: true
      },
      {
        name: 'Toulaye',
        online: true
      }
  
    ]
  }
}
