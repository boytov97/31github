import { HasEmailFilter } from "./filters/HasEmailFilter";
import { SubscribedNewsletters } from "./filters/SubscribedNewsletters";
import { CustomerRepository } from "./repositories/CustomerRepository";

export const inlzChainOfResponsibility = async () => {
  const chainIfFilters = new HasEmailFilter(new CustomerRepository());
  chainIfFilters.setNext(new SubscribedNewsletters());

  await chainIfFilters.handle({
    type: "activate_your_account",
    reciever: {
      id: 1,
    },
  });

  console.log("Message sent successfuly!");
};
