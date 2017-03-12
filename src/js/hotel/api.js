import Data from "./../data";
import HotelActions from "./actions";

class HotelApi {

  getList() {
    setTimeout(
      ()=> {
        HotelActions.getList(Data)
      },
      3000
    );
  }

}

export default new HotelApi();
