import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TOKEN = "coinranking39d5b0c7542bf35224a1116f316a9c2aa327ce7fe8087e92"
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinranking.com/v2/' }),
    endpoints: builder => ({
        getCoins: builder.query({
        query: (limit) => `coins?x-access-token=${TOKEN}&limit=${limit}`,
        }),
        getCoin : builder.query({
            query : ({coinid,TimePeriod}) =>`coin/${coinid}?x-access-token=${TOKEN}&timePeriod=${TimePeriod}`
        }),
        getCoinHistory : builder.query({
            query : ({coinid,TimePeriod}) =>`coin/${coinid}/history?x-access-token=${TOKEN}&timePeriod=${TimePeriod}`
        })
    })
})
export const { useGetCoinsQuery,useGetCoinQuery,useGetCoinHistoryQuery} = apiSlice
