import { useState } from 'react';
// import axios from 'axios';
import useSWR from 'swr';

const useFetch = (url: string) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const fetcher = (url: string) =>
    fetch(
      url
      // , {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      //   Email: `${localStorage.getItem('userEmail')}`
      // }
      // }
    ).then((res) => res.json());

  const { data, isLoading, error } = useSWR(url, fetcher);

  return { data, isLoading, error };
};

export default useFetch;
