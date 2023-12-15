import { SocialShareUrlGenerator } from "./SocialShareUrlGenerator";

export const inlzSingleton = async () => {
  const generatorOne = SocialShareUrlGenerator.getInstance();
  const generatorTwo = SocialShareUrlGenerator.getInstance();

  generatorOne.setType("generator_one");

  console.log({
    generatorTwoType: generatorTwo.getType(),
  });

  return Promise.resolve({});
};
