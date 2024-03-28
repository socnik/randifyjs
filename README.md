# RandifyJS

This is library for generate random numbers in JavaScript. Written on TypeScript.

_I not will accept PRs for this repository._

## How To Use?

### Random methods reference

#### `rand`

```ts
declare function rand(min: number, max: number, step: number = 1): number
```

Return random value between min and max with step (default 1).

Examples:

```ts
rand(0, 10, 2) // possible return values: 0, 2, 4, 6, 8, 10
rand(0, 3) // possible return values: 0, 1, 2, 3
```

#### `shuffle`

```ts
declare function shuffle<T>(sequence: T[]): T[]
```

Shuffle array of any values.

#### `choices`

```ts
declare function choices<T>(sequence: T[], choicesNumber: number): T[] | null
```

Random choice specified number of the values from an array. Return `null` if array empty.

#### `choice`

```ts
declare function choice<T>(sequence: T[]): T | null
```

Same as `choices`, but return only one number.

### Random class API

For simple generating random value you can use only methods from `Random methods reference`. But for advanced use (for example if you want get random numbers from your backend), you need use `Random` or `AsyncRandom` APIs.

`Random` is class. All simple methods as `rand` or `shuffle` exports from the default instance of the `Random` class. You can see this in the `defaultInstance.ts` file.

`Random` class takes one argument - `RandomSource`. But what is `RandomSource`? `RandomSource` - object with `getRandomValue()` method. This method should return a value between `0` and `1`. This is TypeScript type declaration of it:

```ts
type RandomSource = {
  getRandomValue(): number
}
```

You can create a custom `RandomSource` with your own `getRandomValue` function. Default `RandomSource` (the same as the default instance of the `Random` class) uses `Math.random()`:

```ts
const defaultRandomSource: RandomSource = {
  getRandomValue: () => Math.random(),
}
```

### `AsyncRandom` class API

If the operation of getting random values (between `0` and `1`) is async you need to use the `AsyncRandom` API.

This is the same as the `Random` class, but all methods return promises. And you should use `AsyncRandomSource`. This is the TypeScript declaration for it:

```ts
type AsyncRandomSource = {
  getRandomValue(): Promise<number>
}
```
