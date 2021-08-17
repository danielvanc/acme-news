import axios from 'axios'

export default async function client(
  endpoint: string,
  {data , token, headers: customHeaders, ...customConfig} = {},
) {
  const config = {
    url: endpoint,
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      'Content-Type': data ? 'application/json' : "",
      'X-Tenant': 'androidworld.newsifier.com',
      ...customHeaders,
    },
    ...customConfig,
  }

  return axios(config).then(async response => {
    if (response.status === 401) {
      return Promise.reject({message: 'Error communicating with API.'})
    }
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(data)
    }
  })
}
