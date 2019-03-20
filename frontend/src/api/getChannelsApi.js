import axios from "axios";

const getChannels = async () => {
  try {
    const res = await axios.get(`/api/Channels`);
  } catch (e) {}
  return res.data;
};
export default getChannels;
