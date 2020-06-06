import { useState, useEffect } from 'react';
import Axios from '../helpers/api';
import pluralize from 'pluralize';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export const useApi = (api, params = { filter: {}, search: '' }) => {
  const { i18n } = useTranslation();

  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const apiSingular = api && pluralize.singular(api);

  Axios.defaults.headers.locale = i18n.language;

  const clearError = () => setError(false);

  const create = async (data, config, id, action = 'post') => {
    setIsFetching(true);
    const apiEndpoin = action === 'post' ? api : api + '/' + id;
    const payload = config ? data : { [apiSingular]: data };
    try {
      const response = await Axios[action](apiEndpoin, payload);
      setItem(response.data.data[apiSingular]);
      toast(response.data.message);
    } catch (catchedError) {
      setError(catchedError);
    }

    await setIsFetching(false);
  };

  const update = (id, data, config) => create(data, config, id, 'put');
  const remove = id => {
    create({ id }, 'delete').then(() =>
      setList(list.filter(data => data.id !== id))
    );
  };

  const getList = async (reqParams = params) => {
    setIsFetching(true);
    const { id, ...rest } = reqParams;
    const setData = id ? setItem : setList;
    const apiEndpoin = id ? api + '/' + reqParams.id : api;
    const apiKey = id ? apiSingular : api;
    try {
      const response = await Axios.get(apiEndpoin, {
        params: rest
      });
      setData(response.data.data[apiKey]);
    } catch (catchedError) {
      setError(catchedError);
    }
    setIsFetching(false);
  };

  const getItem = params => getList(params);

  return {
    item,
    list,
    error,
    getList,
    getItem,
    remove,
    create,
    isFetching,
    clearError,
    update
  };
};

export default (api, options = {}) => {
  const { stopFetch, params } = options;
  const {
    list,
    getList,
    getItem,
    item,
    isFetching,
    update,
    create,
    error
  } = useApi(api, params);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (stopFetch || !api) return () => ({});
    if (!mounted) {
      setMounted(true);
      getList();
    }
  }, [getList, stopFetch, api, mounted]);
  return { list, getList, getItem, update, create, item, isFetching, error };
};
