import Image from "next/image"; 
const Header = () => (
  <header className="bg-white text-black p-4">
    <nav className="flex justify-between items-center max-w-6xl mx-auto ">
      <div className="flex items-center ">
        <Image
          src="/assets/logo.png" 
          alt="Elbrit Logo"
          width={150} 
          height={100} 
          

          className="mr-2"  

        />
      </div>
    </nav>
  </header>
);

export default Header;
