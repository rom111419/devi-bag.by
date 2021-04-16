export class Order {
    constructor(
        public name: string,
        public address: string,
        public phone: string,
        public count: string,
        public color: string,
        public summa: string
    ) {}
}

export class Orders {
    constructor(
      public orders: Order[],
      public count: number,
      public good: string,
      public phone: number,
    ) {
    }
}
