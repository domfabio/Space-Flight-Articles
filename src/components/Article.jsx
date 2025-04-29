const Article = ({ image, title, subtitle, description }) => {
  return (
    <article className='max-w-5xl flex flex-col sm:flex-row mx-auto text-neutral-50 font-roboto mb-20 px-4 items-center'>
      <div className='flex-shrink-0 sm:w-[280px] h-[200px] w-full sm:h-40 overflow-hidden rounded-[7px] sm:mr-6 mb-5 sm:mb-0'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105'
        />
      </div>
      <div>
        <h2 className='font-bold text-[28px] mb-4 line-clamp-1'>{title}</h2>
        <h3 className='text-gray-500 mb-4'>{subtitle}</h3>
        <p className='opacity-80 line-clamp-2'>{description}</p>
      </div>
    </article>
  );
};

export default Article;
