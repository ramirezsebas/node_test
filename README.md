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

1. Create a function to generate a random number between 100 and 200.

2. Create a function to give me the classroom usage in hours.(1 year)

3. Calculate the number of broken fluorescent tubes in 1 year.

4. Sort the number of broken fluorescent tubes in 1 year. (Ascending order) This helped me to only consider the hours of the first two broken tubes in the unit.

5. Calculate the cost of the fluorescent tubes per year.
