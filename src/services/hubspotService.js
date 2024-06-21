import axios from "axios";

const postFormContactUs = async (data) => {
  const url = import.meta.env.VITE_POTENCIAL_WEB_LEADS_CONTACTS_URL;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export default {
  postFormContactUs,
};
