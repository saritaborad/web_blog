import axios from "axios";
import { GET_CONTACT_PAGE, GET_REQUEST_DATA } from "./query/strapiQuery";

export async function fetchConfig() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/config");
 return res.data;
}

export async function fetchTheme() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/theme");
 return res.data;
}

export async function fetchReqData() {
 const res = await axios.get("http://127.0.0.1:1337/" + GET_REQUEST_DATA);
 return res.data;
}

export async function getContactInfo() {
 const res = await axios.get("http://127.0.0.1:1337/" + GET_CONTACT_PAGE);
 return res.data;
}
