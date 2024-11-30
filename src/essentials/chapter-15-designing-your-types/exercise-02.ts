// type PromiseFunc = (input: any) => Promise<any>;

// type Example1 = PromiseFunc<string, string>;
// // Type 'PromiseFunc' is not generic.

// type test1 = Expect<Equal<Example1, (input: string) => Promise<string>>>;

// type Example2 = PromiseFunc<boolean, number>;
// // Type 'PromiseFunc' is not generic.

// type test2 = Expect<Equal<Example2, (input: boolean) => Promise<number>>>;

type PromiseFunc<I, R> = (input: I) => Promise<R>;

type Example1 = PromiseFunc<string, string>;

type Example2 = PromiseFunc<boolean, number>;
