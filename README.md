# Comrade Sort

```javascript

    const Comrades = Array;

    Comrades.prototype.community = () => {
        return this.length;
    }
    Comrades.prototype.marxism = (comrades) => {
        let sum = comrades?.reduce((a, b) => a + b, 0);
        return this.fill(sum/this.community());
    }

    Comrades.prototype.extreme = () => {
        return 1 
    };

    const comradeSort = (comrades) => {
        return Comrades(comrades.community()).marxism(comrades);
    }

```

## Usage

```javascript
    const comrades = [1, 2, 3, 4, 5];

    comradeSort(comrades);

    // Out: [3, 3, 3, 3, 3]
```

## How it works ?

The `comradeSort` function takes an array of numbers and returns an array of the same length with the value of the array divided by the community.

## Why ?

Because it's fun.

## How to contribute ?

Just fork the repo and make a pull request.

## Rules

- No `var` keyword, we don't need it, we have `const` and `let`
- No `for` loop, we don't need it, we have `forEach`
- No `if` statement, we don't need it, we have `&&`
- No `function` keyword, we don't need it, we have `=>`
- No `class` keyword, we don't need it, classes are for bourgeois
- No `TypedArray` object, we don't need it, we have `self`
- No `TypeScript`, we don't like types, we like freedom
- No `Automated Tests`, we don't need it, we have `Unit Tests`

## License

Open source, free for all

## NOTE

This should be the `READWE.md` but the github is bourgeoise and doesn't allow it.

## NOTE 2

This is a joke, don't take it seriously.
