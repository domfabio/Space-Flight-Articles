const Article = ({ image, title, subtitle, description }) => {
  return (
    <article className='max-w-[750px] flex flex-col sm:flex-row mx-auto text-neutral-50 font-roboto mb-12 px-4'>
      <img
        src={image}
        alt={title}
        className='h-fit w-full sm:w-60 mr-6 mb-5 sm:mb-0 cursor-pointer transition-transform duration-300 hover:scale-105'
      />
      <div>
        <h2 className='font-bold text-3xl mb-4'>{title}</h2>
        <h3 className='text-gray-500 mb-4'>{subtitle}</h3>
        <p className='opacity-80'>{description}</p>
      </div>
      
    </article>
  );
};

export default Article;
