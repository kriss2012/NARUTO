"use client";
import React, { useEffect } from "react";
import Image from "next/image";

interface Character {
  id: number;
  name: string;
  title: string;
  image: string;
  clan: string;
  rank: string;
  abilities: string[];
  description: string;
  affiliation: string;
}

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative h-[600px]">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>

            {/* Rank Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-bold text-white shadow-lg">
                {character.rank}
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="p-8 overflow-y-auto max-h-[600px] custom-scrollbar">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                  {character.name}
                </h2>
                <p className="text-xl text-orange-400 font-semibold mb-4">
                  {character.title}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {character.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/30">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-sm">Clan</p>
                    <p className="text-white font-semibold">{character.clan}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/30">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-400 text-sm">Affiliation</p>
                    <p className="text-white font-semibold">
                      {character.affiliation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></span>
                  <span>Signature Abilities</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {character.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 group-hover:animate-pulse"></div>
                        <span className="text-orange-300 text-sm font-medium">
                          {ability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
