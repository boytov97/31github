import { Context } from "./context";
import { EuroConverter } from "./strategies/EuroConverter";

export const inlzStrategy = async () => {
  const converterContext = new Context(new EuroConverter());

  const productPrice = 24012.1;
  const dollarPrice = converterContext.convertPrice(productPrice);

  console.log({
    dollarPrice,
  });

  return await Promise.resolve({});
};
