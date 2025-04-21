import logoImg from '../assets/logo-space.png';
import burgerImg from '../assets/burger.svg';

const Header = () => {
  return (
    <header className='sticky top-0 z-[999] w-full flex p-4 bg-neutral-700 text-neutral-50 shadow-xl/20 mb-30'>
      <nav className='container md:max-w-7xl flex flex-row mx-auto items-center justify-between'>
        <div className='flex flex-row items-center gap-4 font-grenze text-2xl sm:text-3xl font-normal cursor-pointer'>
          <img src={logoImg} alt='logo space' className='h-10 sm:h-14' />
          Space Flight News
        </div>
        <ul className='hidden lg:flex flex-row gap-10 font-roboto opacity-90 font-light tracking-wide'>
          <li className='font-medium'><a href="">Home</a></li>
          <li className='hover:opacity-80 transition-opacity'><a href="#">Trending</a></li>
          <li className='hover:opacity-80 transition-opacity'><a href="#">Categories</a></li>
          <li className='hover:opacity-80 transition-opacity'><a href="#">About us</a></li>
        </ul>
        <img src={burgerImg} alt='menu-icon' className='lg:hidden h-4 cursor-pointer'/>
      </nav>
    </header>
  );
};

export default Header;
