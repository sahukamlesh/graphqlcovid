import Home from './pages/Home';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:12000/"
  uri: "https://covid19-graphql.herokuapp.com/"
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
