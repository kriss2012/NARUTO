"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CharacterModal from "./CharacterModal";

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

const Characters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const characters: Character[] = [
    {
      id: 1,
      name: "Naruto Uzumaki",
      title: "The Seventh Hokage",
      image: "/naruto-hero.jpeg",
      clan: "Uzumaki",
      rank: "Hokage",
      abilities: [
        "Rasengan",
        "Shadow Clone Jutsu",
        "Sage Mode",
        "Nine-Tails Chakra Mode",
      ],
      description:
        "The protagonist who dreams of becoming Hokage and gaining the village's acknowledgment.",
      affiliation: "Konohagakure",
    },
    {
      id: 2,
      name: "Sasuke Uchiha",
      title: "The Last Uchiha",
      image: "https://wallpapercave.com/wp/wp4829976.jpg",
      clan: "Uchiha",
      rank: "Rogue Ninja",
      abilities: ["Sharingan", "Chidori", "Amaterasu", "Susanoo"],
      description:
        "A prodigy seeking revenge and later redemption, wielding the legendary Sharingan.",
      affiliation: "Konohagakure",
    },
    {
      id: 3,
      name: "Sakura Haruno",
      title: "The Medical Ninja",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71e62c98-cba5-4db8-bac1-dd24566366ff/dfsf872-512dc7c1-3b0e-474c-82f7-f35d20dda562.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxZTYyYzk4LWNiYTUtNGRiOC1iYWMxLWRkMjQ1NjYzNjZmZlwvZGZzZjg3Mi01MTJkYzdjMS0zYjBlLTQ3NGMtODJmNy1mMzVkMjBkZGE1NjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D7Lkjb69TouZeF1Pu0X1I8hKAD19ihragF2fjYExKys",
      clan: "Haruno",
      rank: "Jonin",
      abilities: [
        "Chakra Control",
        "Medical Ninjutsu",
        "Cherry Blossom Impact",
        "Hundred Healings",
      ],
      description:
        "A skilled medical ninja and one of the most powerful kunoichi in the ninja world.",
      affiliation: "Konohagakure",
    },
    {
      id: 4,
      name: "Kakashi Hatake",
      title: "The Copy Ninja",
      image:
        "https://wallpaperbat.com/img/76131428-kakashi-live-wallpaper-4k-hd.jpg",
      clan: "Hatake",
      rank: "Sixth Hokage",
      abilities: [
        "Sharingan",
        "Lightning Blade",
        "Kamui",
        "1000+ Copied Jutsu",
      ],
      description:
        "The legendary Copy Ninja who has copied over a thousand techniques.",
      affiliation: "Konohagakure",
    },
    {
      id: 5,
      name: "Itachi Uchiha",
      title: "The Crow",
      image: "https://wallpapercave.com/wp/wp6617438.jpg",
      clan: "Uchiha",
      rank: "Rogue Ninja",
      abilities: ["Mangekyo Sharingan", "Tsukuyomi", "Amaterasu", "Susanoo"],
      description:
        "A prodigy who sacrificed everything for the village, bearing the burden in silence.",
      affiliation: "Akatsuki",
    },
    {
      id: 6,
      name: "Namikage Mina",
      title: "The Yellow Flash",
      image:
        "http://vignette1.wikia.nocookie.net/anicrossbr/images/7/71/Minato_Namikaze.png/revision/latest?cb=20151021150513&path-prefix=pt-br",
      clan: "Namikaze",
      rank: "Fourth Hokage",
      abilities: [
        "Flying Thunder God",
        "Rasengan",
        "Sage Mode",
        "Nine-Tails Seal",
      ],
      description:
        "The legendary Fourth Hokage known for his unmatched speed and tactical genius.",
      affiliation: "Konohagakure",
    },
    {
      id: 7,
      name: "Jiraiya",
      title: "The Toad Sage",
      image: "https://wallpaperaccess.com/full/671125.jpg",
      clan: "N/A",
      rank: "Sannin",
      abilities: ["Sage Mode", "Rasengan", "Toad Summoning", "Fire Style"],
      description:
        "One of the Legendary Sannin and Naruto's mentor, a legendary ninja and author.",
      affiliation: "Konohagakure",
    },
    {
      id: 8,
      name: "Madara Uchiha",
      title: "The Ghost of the Uchiha",
      image:
        "https://wallpapers.com/images/hd/naruto-madara-uchiha-0v1ty2jei9kxf0mp.jpg",
      clan: "Uchiha",
      rank: "Legendary Ninja",
      abilities: [
        "Eternal Mangekyo Sharingan",
        "Perfect Susanoo",
        "Wood Style",
        "Rinnegan",
      ],
      description:
        "The legendary co-founder of Konohagakure and one of the most powerful shinobi in history.",
      affiliation: "Akatsuki",
    },
    {
      id: 9,
      name: "Obito Uchiha",
      title: "The Masked Man",
      image: "https://images7.alphacoders.com/131/1310730.jpeg",
      clan: "Uchiha",
      rank: "Rogue Ninja",
      abilities: ["Mangekyo Sharingan", "Kamui", "Wood Style", "Rinnegan"],
      description:
        "A tragic figure who became twisted by loss and manipulated the ninja world.",
      affiliation: "Akatsuki",
    },
    {
      id: 10,
      name: "Shikamaru Nara",
      title: "The Shadow Strategist",
      image:
        "https://static.wikia.nocookie.net/665c7e9e-cb97-4f86-a514-8d83b664828d",
      clan: "Nara",
      rank: "Jonin",
      abilities: [
        "Shadow Possession",
        "Shadow Strangle",
        "Strategic Genius",
        "Shadow Sewing",
      ],
      description:
        "A brilliant strategist with an IQ over 200, known for his shadow-based techniques.",
      affiliation: "Konohagakure",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % characters.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlay, characters.length]);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absPosition =
      ((diff % characters.length) + characters.length) % characters.length;

    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;

    if (absPosition === 0) {
      // Active card - center
      translateX = 0;
      translateZ = 100;
      scale = 1.2;
      zIndex = 10;
    } else if (absPosition === 1) {
      // Right card
      translateX = 350;
      translateZ = -50;
      rotateY = -35;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (absPosition === characters.length - 1) {
      // Left card
      translateX = -350;
      translateZ = -50;
      rotateY = 35;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (absPosition === 2) {
      // Far right
      translateX = 650;
      translateZ = -150;
      rotateY = -45;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 2;
    } else if (absPosition === characters.length - 2) {
      // Far left
      translateX = -650;
      translateZ = -150;
      rotateY = 45;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 2;
    } else {
      // Hidden cards
      translateX = absPosition < characters.length / 2 ? 1000 : -1000;
      translateZ = -200;
      scale = 0.4;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveIndex(
      (prev) => (prev - 1 + characters.length) % characters.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % characters.length);
  };

  return (
    <section
      ref={sectionRef}
      id="characters"
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">
              Elite Warriors
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient-text">
              LEGENDARY
            </span>
            <br />
            <span className="text-white">SHINOBI</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the most powerful and iconic ninjas who shaped the destiny
            of the ninja world
          </p>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative perspective-[2000px] h-[700px] mb-20">
        <div className="relative w-full h-full preserve-3d">
          {characters.map((character, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={character.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
                style={style}
                onClick={() => {
                  if (isActive) {
                    setSelectedCharacter(character);
                  } else {
                    setActiveIndex(index);
                    setIsAutoPlay(false);
                  }
                }}
              >
                <div
                  className={`relative w-[350px] h-[500px] rounded-2xl overflow-hidden border-4 transition-all duration-500 ${
                    isActive
                      ? "border-orange-500 shadow-2xl shadow-orange-500/50"
                      : "border-orange-500/30 shadow-xl"
                  }`}
                >
                  {/* Character Image */}
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Character Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-orange-400 text-sm font-medium">
                        {character.rank}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {character.name}
                    </h3>
                    <p className="text-orange-400 text-sm mb-4">
                      {character.title}
                    </p>

                    {isActive && (
                      <div className="space-y-3 animate-fade-in">
                        <div className="flex items-center space-x-2 text-gray-300 text-sm">
                          <svg
                            className="w-4 h-4 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span>{character.clan} Clan</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {character.abilities.slice(0, 2).map((ability, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full text-xs text-orange-300"
                            >
                              {ability}
                            </span>
                          ))}
                        </div>

                        <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/30">
                          View Details
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 border-2 border-white/20">
                      <span className="text-white font-bold text-lg">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-20 flex justify-center items-center space-x-8">
        <button
          onClick={handlePrev}
          className="group w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-12 h-3 bg-gradient-to-r from-orange-500 to-red-600"
                  : "w-3 h-3 bg-gray-600 hover:bg-orange-500/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="group w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-orange-500/30"
        >
          <svg
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="relative z-20 flex justify-center mt-8">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            isAutoPlay
              ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          {isAutoPlay ? "⏸ Pause" : "▶ Auto Play"}
        </button>
      </div>

      {/* Character Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </section>
  );
};

export default Characters;
