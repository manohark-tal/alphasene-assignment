import axios from "axios";

const getMessages = async channelId => {
  try {
    const res = await axios.get(`/api/Channels/${channelId}/messages`);
  } catch (e) {}
  return res.data;
};
export default getMessages;
