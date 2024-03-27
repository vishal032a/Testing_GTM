import Feed from '@components/Feed';

const page = () => {
  return (
    <section className="w-full flex flex-col justify-center item-center">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-5xl text-center">
        Discover & Share
        <br className="" />
        <span className="text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          AI-powered Prompts
        </span>
      </h1>
      <p className="text-center  mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl;">
        Promptopia is an open-source prompting tool for modern world to discover
        , create and share creative prompt
      </p>

      <Feed />
    </section>
  );
};

export default page;
