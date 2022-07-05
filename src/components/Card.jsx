import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaTwitter, FaBuilding } from "react-icons/fa";
import imageGit from "../assets/github.png";

const card = ({ dataUser }) => {
  return (
    <div className="bg-blue px-6 py-6 rounded-xl text-white flex flex-col gap-3 items-end">
      <div className="flex flex-wrap w-full">
        <div className="w-1/4">
          {dataUser ? (
            <img
              className="w-[6rem] lg:w-[8rem] rounded-full"
              src={dataUser?.avatar_url}
              alt="image"
            />
          ) : (
            <img className="w-[6rem] rounded-full" src={imageGit} alt="image" />
          )}
        </div>
        <div className="w-3/4 flex flex-col mb-5 md:gap-4 md:my-3">
          <div className="flex flex-col md:flex-row justify-between pl-6 md:pl-0">
            <h2 className="text-2xl">{dataUser?.name}</h2>
            <span className="text-stone-400">joined 25 jan 2011</span>
          </div>
          <p className="pl-6 md:pl-0 text-blueLight">{dataUser?.login}</p>
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full md:w-3/4 text-stone-400">{dataUser?.bio}</div>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-3/4 gap-6">
        <div className="bg-blueDark flex justify-between px-4 py-3 rounded-xl">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs text-stone-400">Repos</p>
            <p className="text-lg">{dataUser?.public_repos}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs text-stone-400">Followers</p>
            <p className="text-lg">{dataUser?.followers}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xs text-stone-400">Following</p>
            <p className="text-lg">{dataUser?.following}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row justify-between md:gap-3">
          <div className="flex flex-col justify-between gap-3">
            <div className="flex gap-3">
              <IoLocationSharp />
              <p className="text-xs">{dataUser?.location}</p>
            </div>
            <div className="flex gap-3">
              <FaBuilding />
              <a
                href={dataUser?.html_url}
                target="_blank"
                rel="nooper noreferrer"
                className="text-xs"
              >
                {dataUser?.html_url}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3">
            <div className="flex gap-3">
              <FaTwitter />
              <p className="text-xs">
                {dataUser?.twitter_username || "Not Avalible"}
              </p>
            </div>
            <div className="flex gap-3">
              <FaBuilding />
              <p className="text-xs">@github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
