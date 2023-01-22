import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider , ApolloClient, InMemoryCache} from '@apollo/client';
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields : {
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:9000/graphql',
  cache: cache,
});

function App() {
  return (
<>
    <ApolloProvider client={client}>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     </Router>
    </ApolloProvider>
</>
  );
}

export default App;
