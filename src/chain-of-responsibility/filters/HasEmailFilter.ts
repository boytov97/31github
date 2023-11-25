import { CustomerRepositoryInterface } from "../repositories/CustomerRepositoryInterface";
import { AbstractFilter } from "./AbstractFilter";

export class HasEmailFilter extends AbstractFilter {
  public constructor(
    private readonly customerRepository: CustomerRepositoryInterface
  ) {
    super();
  }

  public async execute(message: Record<string, any>): Promise<void> {
    const customer = await this.customerRepository.findById(1);

    /**
     * If customer has not an email, we can not send a message
     */
    if (null === customer.email) {
      throw Error("Customer not found");
    }

    // OK
  }
}
