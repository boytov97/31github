import { CustomerEntity } from "../entities/CustomerEntity";
import { CustomerRepositoryInterface } from "./CustomerRepositoryInterface";

export class CustomerRepository implements CustomerRepositoryInterface {
  public async findById(id: number): Promise<CustomerEntity> {
    return await Promise.resolve(new CustomerEntity());
  }
}
