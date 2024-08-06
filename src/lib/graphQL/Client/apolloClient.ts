import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://147.45.133.241:5000/graphql/', // Ваш эндпоинт GraphQL
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

export default client
