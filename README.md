# Algorithm Test

## Problem

In a University, there is a classroom, in that classroom, there are 4 fluorescent tube units, each
unit contains 4 fluorescent tubes. The classroom is used 15 hours a day, 5 times a week, 9 months a year.
Every fluorescent tube works for a fixed amount of hours, that amount is returned by a function called "rand()" that returns an integer number from 100 to 200 that represents the number of hours that the fluorescent tube will work before breaking. Once 2 fluorescent tubes fail in a single unit, you should replace all 4 tubes.
Each fluorescent tube costs 7 U$D.

The algorithm should print:

1. How many fluorescent tubes were broken in 1 year in that classroom?
2. How much money do fluorescent tubes cost the University per year per classroom?

## Solution

The solution was implemented in javacript and node.js 20.10.0.

To execute the solution, you need to have node.js installed in your machine. Then, you can run the following command in your terminal:

```bash
node src/index.js
```

or

```bash
npm start
```

The output will be printed in the terminal.

## Step by step thinking

The algorithm is based on the following steps:

1. I go through per hour, in total it would be 2700 hours, converted from the class's usage time, so I go through it 2700 times.
2. Additionally, I'm iterating through each fluorescent support.
3. In each iteration, basically, I decrement the tubes one by one (only if they are not at 0) since an hour passes for each cycle.
4. Also, in the iteration, I check if there are already 2 tubes that have stopped working. If that's the case, I proceed to replace all tubes by generating new lifespan values in hours.
5. Otherwise, I continue the cycle.
6. Before the loop I initialized 2 counters, one for the number of tubes that broke and another for the total number of the tubes.
7. At the end I print the number of tubes that broke and the multiplication of the number of tubes by 7, which is the cost of each tube.
