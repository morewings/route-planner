import {useEffect} from 'react';
import loadGoogleMaps from 'load-google-maps-api';

const useGoogleMap = onSuccess => {
  useEffect(() => {
    let isSubscribed = true;
    loadGoogleMaps({
      key: process.env.REACT_APP_GOOGLE_API_KEY,
    })
      .then(api => {
        isSubscribed && onSuccess(api);
      })
      .catch(error => {
        isSubscribed && console.error(error); // eslint-disable-line no-console
      });
    return () => {
      isSubscribed = false; // eslint-disable-line fp/no-mutation
    };
  }, [onSuccess]);
};

export default useGoogleMap;
