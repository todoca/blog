import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="https://todoca.com.ve/wp-content/uploads/logotdca.png"
        alt="logo"
        width={100}
        height={50}
        className="rounded-full object-cover"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
