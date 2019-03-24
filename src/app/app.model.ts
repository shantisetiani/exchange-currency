export class Currency {
    constructor(
        public base: string,
        public date: Date,
        public rates: string,
    ) { }
}