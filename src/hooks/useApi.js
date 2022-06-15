import { useState, useEffect } from 'react';
import axios, { CancelToken } from 'axios';


const hostUri = 'https://apiv2.popupsmart.com/api';
const constructUrl = (url) => `${hostUri}/${url}`;

export const urls = {
  googlefontUrl: constructUrl('googlefont'),
  
};

const useApi = (initUrl = null, initConfig = {}) => {
  const [request, setRequest] = useState({
    url: initUrl,
    config: { ...initConfig },
  });
  const [response, setResponse] = useState({
    error: null,
    data: null,
    status: null,
  });

  useEffect(() => {
    const source = CancelToken.source();

    const makeRequest = async () => {
      try {
        const accessToken = '';
        const headers = { Authorization: `Bearer ${accessToken}` };
        const reqConfig = { ...request.config, headers };
        const res = await axios(request.url, {
          withCredentials: true,
          cancelToken: source.token,
          ...reqConfig,
        });
        setResponse({
          status: res.status,
          data: res.data,
          error: null,
          headers: res.headers,
        });
      } catch (e) {
        if (axios.isCancel(e)) {
          // console.log('request cancelled', request);
        } else if (e.response) {
          const { status } = e.response;
          const data = { result: e.response.data.result || e.message };
          setResponse({ status, data, error: e });
        } else {
          throw e;
        }
      }
    };

    if (request.url && request.config) {
      makeRequest();
    }
    return () => {
      source.cancel();
    };
  }, [request]);

  return [
    response,
    (url, config = {}) => {
      setRequest({ url, config });
    },
  ];
};

export default useApi;