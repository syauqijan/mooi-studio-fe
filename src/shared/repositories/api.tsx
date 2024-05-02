import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiClient} from '../models/apiInterface';

const FetchDataComponent = () => {
  const [data, setData] = useState<ApiClient[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiClient[]>('https://api.npoint.io/b5c803b7e3e61412220c');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default FetchDataComponent;