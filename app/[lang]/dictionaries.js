import "server-only";

const dictionaries = {
  // Lazy load the English dictionary
  en: () => import("./dictionaries/en.json").then((module) => module.default),

  // Lazy load the Bengali dictionary
  bn: () => import("./dictionaries/bn.json").then((module) => module.default),
};

// Return the dictionary loader function (should call it to fetch data)
export const getDictionary = async (locale) => dictionaries[locale]();
