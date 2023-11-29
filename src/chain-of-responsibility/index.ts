import { HasEmailFilter } from "./filters/HasEmailFilter";
import { SubscribedNewsletters } from "./filters/SubscribedNewsletters";
import { CustomerRepository } from "./repositories/CustomerRepository";

export const inlzChainOfResponsibility = async () => {
  const chainOfFilters = new HasEmailFilter(new CustomerRepository());
  chainOfFilters.setNext(new SubscribedNewsletters());

  await chainOfFilters.handle({
    type: "activate_your_account",
    reciever: {
      id: 1,
    },
  });

  console.log("Message sent successfuly!");
};
