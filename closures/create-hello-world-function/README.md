## 2667. Create Hello World Function

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

**Example 1:**

> **Input:** `args = []`
>
> **Output:** `"Hello World"`
>
> **Explanation:**
>
> `const f = createHelloWorld();`
>
> `f(); // "Hello World"` <br> <br> `The function returned by createHelloWorld should always return "Hello World".`

**Example 2:**

> **Input:** `args = [{},null,42]`
>
> **Output:** `"Hello World"`
>
> **Explanation:**
>
> `const f = createHelloWorld();`
>
> `f({}, null, 42); // "Hello World"` <br> <br> `Any arguments could be passed to the function but it should still always return "Hello World".`

<br>

**Constraints:**

- `0 <= args.length <= 10`
