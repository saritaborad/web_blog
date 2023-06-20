import axios from "axios";
import fs from "fs";
import path from "path";
import { GET_CONTACT_PAGE, GET_REQUEST_DATA } from "./query/strapiQuery";
let intervalId = null;
let cachedTheme = null;

if (!global.isFunCalled) global.isFunCalled = false;

export async function fetchTheme() {
 try {
  if (!global.isFunCalled) {
   global.isFunCalled = true;
   const res = await axios.get("http://127.0.0.1:1337/" + "api/theme");
   const theme = res.data.data;
   const themeFile = path.resolve(__dirname, "config", "theme.json");
   fs.writeFileSync(themeFile, JSON.stringify(theme));
   cachedTheme = theme;
  }
 } catch (error) {
  console.log("Failed to fetch theme:", error);
 }
}

export function startThemeUpdateCheck() {
 intervalId = setInterval(async () => {
  try {
   const res = await axios.get("http://127.0.0.1:1337/" + "api/theme");
   const updatedTheme = res.data.data;
   const themeFile = path.resolve(__dirname, "config", "theme.json");
   const currentTheme = cachedTheme || JSON.parse(fs.readFileSync(themeFile));

   if (JSON.stringify(updatedTheme) !== JSON.stringify(currentTheme)) {
    fs.writeFileSync(themeFile, JSON.stringify(updatedTheme));
    cachedTheme = updatedTheme;
   }
  } catch (error) {
   console.log("Failed to update theme:", error);
  }
 }, 600000);
}

export function stopThemeUpdateCheck() {
 clearInterval(intervalId);
}

stopThemeUpdateCheck();

export async function fetchReqData() {
 const res = await axios.get("http://127.0.0.1:1337/" + GET_REQUEST_DATA);
 return res.data;
}

export async function getContactInfo() {
 const res = await axios.get("http://127.0.0.1:1337/" + GET_CONTACT_PAGE);
 return res.data;
}

export async function fetchConfig() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/config");
 return res.data;
}

export async function getTheme() {
 const res = await axios.get("http://127.0.0.1:1337/" + "api/theme?populate[homeBanner][fields][0]=url&populate[bgImage][fields][0]=url&populate[logoImg][fields][0]=url");
 return res.data;
}
