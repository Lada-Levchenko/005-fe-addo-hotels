import AppDispatcher from './../appDispatcher';
import EventEmiter from "events";

class HotelStore extends EventEmiter {
  constructor() {
    super();
    this.list = [];
  }

  addEventListener(event, callback) {
    this.on(event, callback);
  }

  removeEventListener(event, callback) {
    this.removeListener(event, callback);
  }

  setList(list) {
    this.list = list;
  }

  getList() {
    return this.list;
  }

}

let instanseHotelStore = new HotelStore();

instanseHotelStore.dispatchTocken = AppDispatcher.register((action)=> {
  switch (action.eventName) {
    case 'get-list':
      instanseHotelStore.setList(action.data);
      instanseHotelStore.emit(action.eventName);
      return false;
    default:
      return false;
  }
});

export default instanseHotelStore;
