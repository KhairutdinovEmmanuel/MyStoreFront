import { useEffect, useState } from "react";
import { getData } from "../mock/getData";

const useMockData = (data_type: string, options) => {
  const initialResponse = {
    loading: true,
    data: null,
    error: null
  }

  const [response, setResponse] = useState(initialResponse)

  useEffect(() => {
    const handleTimer = () => {
      if(!options.withError) {
        setResponse({
          loading: false,
          data: getData(data_type),
          error: null,
        });
      } else {
        setResponse({
          loading: false,
          data: null,
          error: {
            message: "Something went wrong",
            status: 400,
          },
        })
      }
    }

    setTimeout(handleTimer, 1000);
    
    return () => {
      clearTimeout()
    }
  }, []);

  return response;
}

export default useMockData;