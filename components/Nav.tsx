'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState([]);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      // setProviders(response);
    };

    setProviders();
  }, []);
  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">
          Promptopia
        </p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/create-prompt"
              className="rounded-full border border-black bg-black py-2 px-5 text-white transition-all hover:bg-white hover:text-black "
            >
              Create Post
            </Link>
            <button
              type="button"
              // onClick={signOut}
              className="rounded-full border border-black bg-black py-2 px-5 text-white transition-all hover:bg-white hover:text-black"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                alt="profile_image"
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => signIn()}
                  className="rounded-full border border-black bg-black py-2 px-5 text-white transition-all hover:bg-white hover:text-black"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile view */}

      <div className="sm:hidden">
        {isUserLoggedIn ? (
          <>
            <Image
              alt="profile_image"
              src="/assets/images/logo.svg"
              width={30}
              height={30}
              className="rounded-full"
              onClick={() => {
                console.log(toggleDropDown);
                setToggleDropDown((prev) => !prev);
              }}
            />

            {toggleDropDown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/profile"
                  className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>{' '}
              </div>
            )}
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => signIn()}
                  className="rounded-full border border-black bg-black py-2 px-5 text-white transition-all hover:bg-white hover:text-black"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
