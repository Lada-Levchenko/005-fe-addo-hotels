import AppDispatcher from './../appDispatcher';

class HotelActions {

  getList(items) {
    AppDispatcher.dispatch({
      eventName: 'get-list',
      data: items
    });
  }

}

export default new HotelActions();
