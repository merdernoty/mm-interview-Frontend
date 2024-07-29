
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql/', // Ваш эндпоинт GraphQL
    cache: new InMemoryCache(),
    connectToDevTools:true
});

export default client;
