import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Movie_row";
import Movies from "./components/Movies";
import Languages from "./components/Languages";
import ContinueWatching from "./components/ContinueWatching";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import {
  continueWatching,
  featuredContent,
  languages,
  plans,
  popularMovies,
  trending,
} from "./data/content";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero content={featuredContent} />
      <main className="relative z-10 -mt-24 space-y-4 pb-10">
        <Row title="Trending Now" items={trending} />
        <Movies data={popularMovies} />
        <Languages items={languages} />
        <ContinueWatching items={continueWatching} />
        <Subscription plans={plans} />
      </main>
      <Footer />
    </div>
  );
}
