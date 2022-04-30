import { useRequest } from 'vue-request';

type R = { code: number; data: { name: string } };

export const testRequest = () => {
  const { data, loading, error, run } = useRequest<R, unknown[]>(
    {
      url: '/api/post',
      method: 'post'
    },
    {
      manual: false
    }
  );

  return { data, loading, error, run };
};
