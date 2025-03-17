import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { ThemeProvider } from "./context/ThemeContext";
ThemeProvider;
const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
        <Hero />
        <Services />
        <Contact />
      </div>
    </ThemeProvider>
  );
};
export default App;
