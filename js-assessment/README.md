# My First JavaScript Programs 👋

Hi! This project has five small JavaScript programs I wrote while learning the basics of **variables** and **expressions**.

**Author:** _(bruce)_

---

## What you need before you start

You need **Node.js** on your computer. Node lets you run JavaScript outside the browser.

To check if you already have it, open a terminal (Git Bash on Windows) and type:

```bash
node -v
```

If you see a version number like `v22.0.0`, you're ready. If you get an error, download Node.js from https://nodejs.org and install it.

---

## How to run a program

1. Open a terminal in this project folder.
2. Type `node` followed by the file name, then press Enter.

Example:

```bash
node task1_student_profile.js
```

The result shows up right in the terminal.

---

## The five programs

### Task 1: Student profile (`task1_student_profile.js`)

**What it does:** Stores a student's name, age and whether they are enrolled, then prints each one on its own line.

**What I practised:** The three basic kinds of data: a **string** (text), a **number**, and a **boolean** (`true` or `false`). I also used **template literals**, which are text inside backticks `` ` `` that let me put variables inside `${ }`.

**Output:**
```
Name: Wanjiku
Age: 20
Enrolled: true
```

---

### Task 2: Shop total (`task2_shop_total.js`)

**What it does:** A pen costs KES 250 and a customer buys 4. The program works out the total price.

**What I practised:** Using `const` for values that never change, and **calculating** a value (`price * quantity`) instead of typing the answer by hand.

**Output:**
```
Total: KES 1000
```

---

### Task 3: Swap (`task3_swap.js`)

**What it does:** Starts with `a = 5` and `b = 9`, then swaps them so `a` becomes 9 and `b` becomes 5.

**Why a third variable?** If I wrote `a = b` straight away, the old value of `a` (5) would be erased and lost. So I first save it in a helper variable called `temp`, like putting something down on a table before picking up something else.

**Output:**
```
a = 9
b = 5
```

---

### Task 4: Temperature converter (`task4_temperature.js`)

**What it does:** Converts 25°C into Fahrenheit using the formula `C * 9 / 5 + 32`.

**What I practised:** The **order of evaluation**. JavaScript does multiplication and division first (left to right), then addition:

1. `25 * 9` = 225
2. `225 / 5` = 45
3. `45 + 32` = 77

**Output:**
```
25°C = 77°F
```

---

### Task 5: Bank balance (`task5_bank_balance.js`)

**What it does:** Starts with a balance of 1000, adds 500, subtracts 200, then doubles it.

**What I practised:** **Compound assignment operators**, which are shortcuts for updating a variable:

| Shortcut | Means | Balance after |
|----------|-------|---------------|
| `balance += 500` | add 500 | 1500 |
| `balance -= 200` | subtract 200 | 1300 |
| `balance *= 2` | multiply by 2 | 2600 |

**Output:**
```
Final balance: 2600
```

---

## Quick words to know

- **Variable:** a named box that stores a value.
- **`const`:** a variable that cannot be changed later.
- **`let`:** a variable that can be changed later.
- **String:** text, like `"Wanjiku"`.
- **Boolean:** either `true` or `false`.
- **Template literal:** a string in backticks that can include variables, like `` `Name: ${name}` ``.
- **Expression:** a piece of code that produces a value, like `price * quantity`.