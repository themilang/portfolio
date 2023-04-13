import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text"> Portfolio <br /> Recent Projects</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 15, 2022" text="Online Ecommerce website Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <a href='https://github.com/themilang'>+<Article imgUrl={blog02} date="Sep 26, 2021" text=" Realtime  Face recognition  Let us exlore how it is?" /> </a>
        <a href='https://github.com/themilang'> <Article imgUrl={blog03} date="Sep 26, 2021" text=" Login and authentication form  Let us exlore how it is?" /></a>
        <a href='https://github.com/themilang'><Article imgUrl={blog04} date="Sep 26, 2021" text=" Student management system usring MYSQL. Let us exlore how it is?" /></a>
        <a href='https://github.com/themilang'><Article imgUrl={blog05} date="Sep 26, 2021" text="Portfolio website design using reactjs Let us exlore how it is?" /></a>
      </div>
    </div>
  </div>
);

export default Blog;
