// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const user = useLoaderData();

  //   const [user, setUser] = useState({});
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${username}`)
  //       .then((res) => res.json())
  //       .then((res) => setUser(res));
  //   }, [setUser, username]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={user.avatar_url}
          alt="Profile Image"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">
            <strong>{user.name}</strong>
          </h1>
          <h2 className="text-lg font-semibold text-white">
            FOLLOWERS: {user.followers}
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            {user.bio ||
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?`}
          </p>
          <a href={user.html_url} target="_blank">
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Profile &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
