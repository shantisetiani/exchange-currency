export class Currency {
    constructor(
        public base: string,
        public date: Date,
        public rates: Rates,
    ) { }
}
export class Rates {
    constructor(
        public rates: Float32Array
    ) { }
}