const { fetchConfig, fetchReqData, getContactInfo, getTheme } = require("@/commonApi");
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

export const useReqData = () => {
 const [reqData, setReqData] = useState(null);

 useEffect(() => {
  async function getReqData() {
   const res = await fetchReqData();
   setReqData(res?.data);
  }

  getReqData();
 }, []);

 return reqData;
};

export const useContactInfo = () => {
 const [contact, setContact] = useState();

 useEffect(() => {
  async function ContactInfo() {
   const res = await getContactInfo();
   setContact(res?.data);
  }

  ContactInfo();
 }, []);

 return contact;
};

export const useThemeInfo = () => {
 const [themeInfo, setThemeInfo] = useState();

 useEffect(() => {
  async function getThemeInfo() {
   const res = await getTheme();
   setThemeInfo(res?.data);
  }

  getThemeInfo();
 }, []);

 return themeInfo;
};

export const useMounted = () => {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);
 return mounted;
};
