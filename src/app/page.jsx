

export default function Home() {
  return (
    <div className="flex flex-col gap-5 min-h-screen justify-center items-stretch text-center">
      <div className="relative">
        <h2 className="lg:text-4xl text-2xl font-bold">
          NExt Js Fetching and Rendaring
        </h2>
        <h2 className="text-8xl  absolute inset-0 -top-20 opacity-10 font-medium">
          {" "}
          Fetching Rendaring & style
        </h2>
      </div>
      <div>
        <button className="btn">Lets Explore</button>
      </div>
    </div>
  );
}
