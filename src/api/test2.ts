import { useRequest } from 'vue-request';
import type { RequestResult } from 'vue-request/dist/types/useRequest';
import { R, BASE_API } from './base';

type Data = { name: string };

export const test2Request = (): RequestResult<R<Data>, unknown[]> => {
  return useRequest<any, unknown[]>({
    url: BASE_API + '/api/get',
    method: 'get'
  });
};
