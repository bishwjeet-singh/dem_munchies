import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import'./Menu.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  useEffect(() => {
    document.body.h2 = 'h2-menu';
  }, [])

  return (
    <main>
      <section className="menu section-c">
        <div className="title-menu">
          <h2>Our Menu</h2>
          <div className="underline-menu"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;