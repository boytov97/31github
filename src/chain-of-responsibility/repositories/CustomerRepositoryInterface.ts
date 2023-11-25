import { CustomerEntity } from "../entities/CustomerEntity";

export abstract class CustomerRepositoryInterface {
  public abstract findById(id: number): Promise<CustomerEntity>;
}
