import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';


const NavIcon  =styled.div `

`
const HeaderBar  =styled.div `

`
const Logo  =styled.img `

width : 50px;
height: 50px;
`

const HeaderLink = ({ page, selected }) => {
const title = page.charAt(0).toUpperCase() + page.slice(1);
let className = selected ? 'headerlink-no-link ' : '';
className += 'headerlink-title';

return (
    <Link to={`/${page}`} className={className}>
    {title}
    <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
        •
    </div>
    </Link>
);
};

const Header = () => {
const page = useParams().page || 'home';

return (
    <div className='header'>
    <HeaderLink page='Home' selected={page === 'Home'} />
    <HeaderLink page='Plantpedia' selected={page === 'Plantpedia'} />
    <HeaderLink page='Boutique Shops' selected={page === 'BoutiqueShops'} />
    <HeaderLink page='Subscription' selected={page === 'Subscription'} />
    <HeaderLink page='Blog' selected={page === 'Blog'} />
    <HeaderLink page='Login' selected={page === 'Login'} />
    <HeaderLink page='Register' selected={page === 'Register'} />




    </div>
);
};

export default Header;