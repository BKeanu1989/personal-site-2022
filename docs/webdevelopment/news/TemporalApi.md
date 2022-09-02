# Temporal Api
Working with times & dates is hard. There are leap years, handling of daylight saving times, timezones, formats etc.

In the past as far as my knowledge goes almost everybody used [Moment.js](https://momentjs.com/)
Now there are better alternatives like:
- date-fns
- Day.js
- Luxon

And now there is a new kid on the horizon which might even gets to be implement into javascript itself. Like "Math" for example
the [Temporal Api](https://github.com/tc39/proposal-temporal) is in a proposal state as off now (2022-09-01). [Temporal Docs](https://tc39.es/proposal-temporal/docs/)
But we can still work with via using the polyfill.

```bash“
npm install temporal-polyfill

```

Let's work on some use cases:
- [x] diff
- [ ] time ago
- [ ] adding / subtract of time
- [ ] formats

## Difference

```js
const christmas = Temporal.PlainDateTime.from({
  day: 24,
  month: 12,
  year: 2021,
  hour: 18
});

const newYear = Temporal.PlainDate.from({
  day: 1,
  month: 1,
  year: 2023
});

const diff = christmas.until(newYear);
const diff2 = newYear.since(christmas);
const diff3 = christmas.until(newYear).round({
    smallestUnit: 'day',
    roundingMode: 'floor'
})

console.log(diff.toString()); // P372DT6H
console.log(diff2.toString()); // P373D
console.log(diff3.toString()); // P372D
```

## Adding or subtracting

## Timezones