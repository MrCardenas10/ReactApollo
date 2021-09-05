import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const Apollo = () => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Apollo;
