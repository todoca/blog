import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://todoca.com.ve/wp-content/uploads/logotdca.png"
            alt="logo"
            width={200}
            height={50}
            className="rounded-full"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://www.todoca.com.ve/todoca"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#B9D8EA] flex items-center rounded-full"
        >
          Conoce más de Todoca
        </Link>
      </div>
    </header>
  );
}

export default Header;
