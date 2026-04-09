import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Movie_row";
import Movies from "./components/Movies";
import Languages from "./components/Languages";
import ContinueWatching from "./components/ContinueWatching";
import Subscription from "./components/Subscription";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />

      <Row title="Trending Now" items={["Shadow City","The Last Horizon","Broken Code"]} />

      <Movies data={[
        { title: "Crimson Peak", genre: "Horror", year: 2023, rating: 8.1 }
      ]} />

      <Languages />
      <ContinueWatching />

      <Subscription />
    </div>
  );
}