import React from 'react';
import article from '../assets/article.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';

const Blog = () => {
  // Mock data for blog posts with the imported image
  const articles = [
    {
      title: 'We Launch Delia Webflow this Week!',
      publishedOn: 'Startup On',
      date: 'August 19, 2021',
      readTime: '5 min read',
      img: article,
    },
    {
      title: 'We Launch Delia Webflow this Week!',
      publishedOn: 'Startup On',
      date: 'August 19, 2021',
      readTime: '5 min read',
      img: article2,
    },
    {
      title: 'We Launch Delia Webflow this Week!',
      publishedOn: 'Startup On',
      date: 'August 19, 2021',
      readTime: '5 min read',
      img: article3,
    },
  ];

  return (
    <div className="relative py-16 px-4 md:px-8 bg-white">
      <h1 className='text-center text-blue-500 text-2xl'>ARTICLES</h1>
      <div className="relative mb-12">
        <h1 className="relative text-3xl md:text-5xl text-center font-bold z-10 text-gray-900">
          Our latest post.
        </h1>
      </div>

      {/* Articles Grid with horizontal scrolling on small screens */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8 overflow-x-auto md:justify-center py-8 bg-white hide-scrollbar snap-x snap-mandatory">
          {articles.map((article, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 bg-white shadow-xl rounded-3xl p-4 snap-center"
            >
              {/* Article Image */}
              <div className="relative">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                {/* "5 min read" badge */}
                <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {article.readTime}
                </span>
              </div>
              {/* Article Content */}
              <div className="mt-4">
                <h4 className="font-bold text-lg text-gray-900">{article.title}</h4>
                <p className="text-sm text-gray-500 mt-2">Published on {article.publishedOn}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
