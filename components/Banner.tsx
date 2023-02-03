function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5">
      <div>
        <h1 className="text-5xl lg:text-7xl">Blog de Todoca</h1>
        <h2 className="mt-5 md:mt-2">
          Bienvenido a{" "}
          <span className="underline decoration-4 decoration-[#002399]">
            todos los soñadores y soñadoras
          </span>
          , a su blog favorito de tecnología más avanzado, hecho con amor.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Nuevas actualizaciones, La última tecnología, promociones alucinantes y
        más...
      </p>
    </div>
  );
}

export default Banner;
