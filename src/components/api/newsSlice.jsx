import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TOKEN = "coinranking39d5b0c7542bf35224a1116f316a9c2aa327ce7fe8087e92"
export const newsSlice = createApi({
    reducerPath: 'newsapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
    endpoints: builder => ({
        getNews: builder.query({
        query: () => `news`,
        }),
        getExchanges : builder.query({
            query : ()=> 'exchanges'
        })
    })
})
export const { useGetNewsQuery,useGetExchangesQuery} = newsSlice