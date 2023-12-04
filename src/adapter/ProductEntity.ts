export class ProductEntity {
  public id!: number;

  public title!: string;

  public price!: number;

  public constructor(id: number, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
