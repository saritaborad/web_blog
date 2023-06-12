const { fetchConfig, fetchTheme } = require("@/commonApi");
const { useEffect, useState } = require("react");

export function useConfig() {
 const [configData, setConfigData] = useState(null);

 useEffect(() => {
  async function loadConfig() {
   const res = await fetchConfig();
   setConfigData(res?.data);
  }

  loadConfig();
 }, []);
 return configData;
}

export function useThemeData() {
 const [themeData, setThemeData] = useState(null);

 useEffect(() => {
  async function loadTheme() {
   const res = await fetchTheme();
   setThemeData(res?.data);
  }
  loadTheme();
 }, []);

 return themeData;
}
