import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
