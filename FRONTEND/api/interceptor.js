const onRequest = (config) => {
  console.log(`[axios] [onRequest] : ${JSON.stringify(config)}`);
  config.headers.Authorization = getCookie("access_token");
  return config;
};

const getCookie = (cookie) => {
  const cookies = document.cookie.split(";");
  const cookieLength = cookies.length;

  for (let i = 0; i < cookieLength; i++) {
    const currentCookie = cookies[i].split("=");
    if (currentCookie[0].replace(" ", "") === cookie) return currentCookie[1];
  }
};

const onRequestError = (err) => {
  console.log(`[axios] [onRequestError]: ${JSON.stringify(err)}`);
  return Promise.reject(err);
};

const onResponse = (res) => {
  console.log(`[axios][onresponse]: ${JSON.stringify(res)}`);
  return res;
};

const onResponseError = (err) => {
  console.log(`axios [onRequestError] : ${JSON.stringify(err)}`);
  return Promise.reject(err);
};

export const setupInterceptor = (instance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
  return instance;
};
