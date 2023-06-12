import axios from "axios";

export async function fetchConfig() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/config");
 return res.data;
}

export async function fetchTheme() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/theme");
 return res.data;
}
