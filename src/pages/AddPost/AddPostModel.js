import {v4 as uuid} from "uuid";

class AddPostModel {
  state = {
    id: uuid(),
    user:"",
    title:"",
    text:"",
  };
}

export default AddPostModel