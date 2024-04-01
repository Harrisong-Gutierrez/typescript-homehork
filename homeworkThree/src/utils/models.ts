
export namespace Models {
    export class Items<T> {
        constructor(public name: string, public price: number, public data: T) { }
    }
}

