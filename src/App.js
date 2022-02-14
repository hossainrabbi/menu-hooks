import React, { useEffect, useState } from 'react';
import Category from './components/Category';
import Menu from './components/Menu';
import menu from './data';
import { MainContainer } from './styles/Elements.style';
import GlobalStyle from './styles/Global.style';

function App() {
    const [menuItems, setMenuItems] = useState(menu);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(['all', ...new Set(menu.map((item) => item.category))]);
    }, [menuItems]);

    const filterCategory = (category) => {
        if (category === 'all') {
            setMenuItems(menu);
            return;
        }
        setMenuItems(menu.filter((item) => item.category === category));
    };

    return (
        <MainContainer>
            <GlobalStyle />
            <Category categories={categories} filterCategory={filterCategory} />
            <Menu menuItems={menuItems} />
        </MainContainer>
    );
}

export default App;
