import { Injectable } from '@angular/core';
import { defaultTo, find, get } from 'lodash-es';

interface IModal {
  id: string,
  visible: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  

  isModalOpen(id: string): boolean {
    return get(find(this.modals, {id}), 'visible', false);
  }

  toggleModal(id: string): void {
    const modal = find(this.modals, {id});
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  register(id: string): void {
    this.modals.push({ id, visible: false });
  }
}
