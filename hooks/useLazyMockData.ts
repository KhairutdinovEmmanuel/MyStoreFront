import { useEffect, useState } from "react";
import { getData } from "../mock/getData";

export interface IMockDataResponse {
  loading: boolean;
  data: null | any;
  error: null | any;
}

const useLazyMockData = (options): [(data_type: string) => void, IMockDataResponse] => {
  const initialResponse: IMockDataResponse = {
    loading: true,
    data: null,
    error: null
  }
  const [reqDataType, setReqDataType] = useState<string | null>(null);
  const [response, setResponse] = useState(initialResponse);

  const handleChangeStartingReq = (data_type: string) => {
    setReqDataType(data_type);
  }

  useEffect(() => {
    if(!reqDataType) return;

    const handleTimer = () => {
      if(!options.withError) {
        setResponse({
          loading: false,
          data: getData(reqDataType),
          error: null,
        });
        setReqDataType(null);
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
  }, [reqDataType]);

  return [handleChangeStartingReq, response];
}

export default useLazyMockData;