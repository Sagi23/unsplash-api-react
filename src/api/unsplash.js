import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID nazGKRL1mhOtrJVC4Otk7vKdyBDiblPVnf3TpysNihw",
  },
});
