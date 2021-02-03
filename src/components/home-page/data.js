import { FaCocktail, FaMicroblog,  FaBriefcase} from 'react-icons/fa';
import {BiFoodMenu} from 'react-icons/bi';
import {MdRateReview} from 'react-icons/md';
import React from 'react';

const sublinks = [
    {
        page: 'Menu',
        links : [
            {label: 'Our Menu', icon: <BiFoodMenu/>, url:'/Menu'},
        ],
    },
    {
        page: 'Blog',
        links: [
            { label: 'DIY Cocktails', icon: <FaCocktail />, url: '/DIYCocktails' },
            { label: 'Our Blog', icon: <FaMicroblog />, url: '/OurBlog' },
        ],

    },
    {
        page: 'Company',
        links: [
          { label: 'About Us', icon: <FaBriefcase />, url: '/AboutUs' },
          { label: 'Reviews', icon: <MdRateReview />, url: '/Reviews' },
          { label: 'Career', icon: <FaBriefcase />, url: '/Career' },
        ],
      },

];

export default sublinks;
