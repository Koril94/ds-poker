export class Message implements JSON {
    method: string;
    params: any;
    readonly [Symbol.toStringTag]: string;

    constructor() {
        this.method = "method";
        this.params = {};
    }

    getMethod() {
        return this.method;
    }

    getParams() {
        return this.params;
    }

    setMethod(method: string) {
        this.method = method;
    }

    setParams(params: any) {
        this.params = params;
    }

    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any {
    }

    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
    stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | (number | string)[] | null, space?: string | number): string {
        return "";
    }
}
