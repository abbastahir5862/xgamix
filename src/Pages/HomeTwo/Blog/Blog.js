import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogData = [
        {
            id: 1,
            title: '20 Beautiful Portfolios For Designers & Artists',
            date: '05 Feb, 2023',
            image: 'assets/img/blog-1.jpg',
            comment: '4 Comment',
            href: '/news-details',
        },
        {
            id: 2,
            title: 'The Best Way to Build Your Portfolio',
            date: '03 Feb, 2023',
            image: 'assets/img/blog-2.jpg',
            comment: '2 Comment',
            href: '/news-details',
        },
        {
            id: 3,
            title: 'Get Your Portfolio Ready in 15 Minutes',
            date: '01 Feb, 2023',
            comment: '3 Comment',
            image: 'assets/img/blog-3.jpg',
            href: '/news-details',
        }
    ];
    return (
        <div></div>
    );

};

export default Blog;
