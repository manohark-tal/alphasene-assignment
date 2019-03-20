import axios from "axios";

const sendMessage = async message => {
  try {
    console.log(message);
    const res = await axios.post("/api/Messages", message);
    return res.data;
  } catch (e) {}
};
export default sendMessage;
