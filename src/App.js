import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const category = ["All", ...new Set(items.map((item) => item.category))];

  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(category);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItem(items);
      return;
    }
    const newMenu = items.filter((item) => item.category === category);
    setMenuItem(newMenu);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
