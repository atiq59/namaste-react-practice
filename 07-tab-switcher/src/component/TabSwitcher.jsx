import { useState } from 'react';

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {
          tabs.map((tab) => (
            <button
              key={tab.id}
              className={tab.id === activeTab ? "active" : ""}
              data-testid={`tab-button-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
            {tab.label}
            </button>
          ))
        }
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {activeTab === "home" && <span>Welcome to the Home tab!</span>}
        {activeTab === "profile" && <span>This is your Profile.</span>}
        {activeTab === "settings" && <span>Adjust your Settings here.</span>}
      </div>
    </div>
  );
}
