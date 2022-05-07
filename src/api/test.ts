import { useRequest } from 'vue-request';
import type { RequestResult } from 'vue-request/dist/types/useRequest';
import { R, BASE_API } from './base';

type Data = { name: string };

export const testRequest = (): RequestResult<R<Data>, unknown[]> => {
  return useRequest<any, unknown[]>(
    {
      url: BASE_API + '/api/post',
      method: 'post'
    },
    {
      manual: true,
      debounceInterval: 500
    }
  );
};
