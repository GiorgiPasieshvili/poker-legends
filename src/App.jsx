import { useState } from "react";

import "@/styles/fonts.css";
import "@/styles/reset.css";
import "@/styles/globals.css";

import Festival from "@/components/Festival";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Leaderboard from "@/components/Leaderboard";
import LeaderboardInfoBox from "@/components/LeaderboardInfoBox";
import MysticalKey from "@/components/MysticalKey";
import Promo from "@/components/Promo";
import Promotions from "@/components/Promotions";
import Tabs from "@/components/Tabs";
import Terms from "@/components/Terms";
import Tournaments from "@/components/Tournaments";
import Trips from "@/components/Trips";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="popup">
      <Header />

      <main className="main">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <section className="section space-between">
          {activeTab === 0 ? (
            <>
              <Leaderboard />
              <LeaderboardInfoBox />
            </>
          ) : activeTab === 1 ? (
            <>
              <Promo />
              <Leaderboard />
              <Tournaments />
              <LeaderboardInfoBox />
            </>
          ) : (
            <>
              <Festival />
              <Trips />
              <MysticalKey />
            </>
          )}
        </section>

        <Terms />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
