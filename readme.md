# 🌿 Sylheti Programming Language (SPL)

**Sylheti Programming Language (SPL)** is a fun, beginner-friendly, transpiled programming language that allows developers to write code using the **Sylheti dialect (সিলেটি ভাষা)**. Built on top of **Node.js**, SPL translates Sylheti keywords into JavaScript and executes them seamlessly.

Whether you're learning programming, exploring programming language design, or simply want to code in your own native dialect, SPL offers a unique and enjoyable coding experience.

## ❓ Why SPL?

Most programming languages use English-based keywords, which can feel unfamiliar to many beginners. SPL aims to make programming more approachable and enjoyable by introducing **Sylheti vocabulary** as programming keywords while still leveraging the power of the JavaScript ecosystem.

## ✨ Features

- 🇧🇩 **Native Sylheti Syntax** — Write programs using authentic Sylheti keywords.
- ⚡ **JavaScript Transpiler** — Automatically converts SPL code into executable JavaScript.
- 🚀 **Node.js Powered** — Runs on top of the Node.js runtime.
- 🎯 **Beginner Friendly** — Easy-to-read syntax designed for learning and experimentation.
- 😂 **Fun & Cultural Keywords** — Express programming concepts with humorous and culturally familiar Sylheti expressions.
- 📦 **CLI Support** — Execute `.sylheti` files directly from your terminal using the `spl` command.

---

# 📸 Hello World

Let's write your very first **Sylheti Programming Language (SPL)** program.

Create a file named **`hello.sylheti`** and write the following code:

```sylheti
চিল্লাইয়া_কও "আসসালামু আলাইকুম!"
```

Run the program:

```bash
spl hello.sylheti
```

**Output**

```text
আসসালামু আলাইকুম!
```

🎉 Congratulations! You've just written and executed your first program in **Sylheti Programming Language (SPL)**.

---

# 🚀 Installation

Before installing SPL, make sure you have **Node.js (v16 or later)** installed on your system.

Install SPL globally using **npm**:

```bash
npm install -g sylheti-programming-language
```

> **Note:** If the package is published under a different name, replace `sylheti-programming-language` with the published package name.

Verify the installation:

```bash
spl --version
```

If the installation is successful, the current SPL version will be displayed.

---

# ▶️ Run Your First Program

Create a new file named **`hello.sylheti`**.

```text
hello.sylheti
```

Write your SPL code:

```sylheti
চিল্লাইয়া_কও "আসসালামু আলাইকুম!"
```

Open your terminal in the same directory and run:

```bash
spl hello.sylheti
```

Expected output:

```text
আসসালামু আলাইকুম!
```

That's it! You're now ready to start building programs with **Sylheti Programming Language (SPL)**. 🚀

---

---

# 📖 Language Basics

This section introduces the fundamental concepts of the **Sylheti Programming Language (SPL)**. Each chapter explains a language feature with simple examples to help you learn step by step.

# 📚 Chapters

# 5.1 Variables

Variables are one of the most fundamental concepts in programming. A variable is a named container used to store information that can be accessed, updated, and reused throughout your program.

In **Sylheti Programming Language (SPL)**, variables are declared using the **`ধর`** keyword, which is equivalent to JavaScript's **`let`** keyword.

You can store different kinds of values in a variable, such as:

- Numbers
- Text (Strings)
- Boolean values (`হাছা` / `মিছা`)
- Results of calculations
- User input

> **Syntax**

```sylheti
ধর variable_name = value
```

---

#### 🔹 Example 1: Store a Number

```sylheti
ধর বয়স = ২২

কও বয়স
```

**Output**

```text
22
```

---

#### 🔹 Example 2: Store a String

```sylheti
ধর নাম = "মনজুর"

কও নাম
```

**Output**

```text
মনজুর
```

---

#### 🔹 Example 3: Update a Variable

Unlike constants, the value of a variable can be changed.

```sylheti
ধর সংখ্যা = ১০

কও সংখ্যা

সংখ্যা = ২৫

কও সংখ্যা
```

**Output**

```text
10
25
```

---

#### 🔹 Example 4: Store the Result of a Calculation

Variables can also store the result of mathematical expressions.

```sylheti
ধর a = ১০
ধর b = ২০

ধর যোগফল = a + b

কও যোগফল
```

**Output**

```text
30
```

---

#### 💡 When Should You Use Variables?

Use variables whenever the value might change during program execution.

Examples include:

- A student's marks
- A user's name
- A game score
- A counter inside a loop
- The result of a calculation

---

#### 📝 Summary

- Use **`ধর`** to declare a variable.
- Variables can store numbers, text, booleans, and more.
- A variable's value can be updated later.
- Variables help make programs easier to read and maintain.

| SPL  | JavaScript |
| ---- | ---------- |
| `ধর` | `let`      |

---

# 5.2 Constants

A **constant** is a named value that **cannot be changed** after it has been declared. Unlike variables, constants always keep the same value throughout the program.

In **Sylheti Programming Language (SPL)**, constants are declared using the **`পাক্কা`** keyword, which is equivalent to JavaScript's **`const`** keyword.

Constants are useful for storing values that should never change, such as:

- Mathematical constants (e.g., π)
- Configuration values
- Fixed application settings
- Tax rates
- API URLs

> **Syntax**

```sylheti
পাক্কা constant_name = value
```

---

#### 🔹 Example 1: Store a Number

```sylheti
পাক্কা PI = 3.1416

কও PI
```

**Output**

```text
3.1416
```

---

#### 🔹 Example 2: Store a String

```sylheti
পাক্কা দেশ = "বাংলাদেশ"

কও দেশ
```

**Output**

```text
বাংলাদেশ
```

---

#### 🔹 Example 3: Use a Constant in a Calculation

```sylheti
পাক্কা VAT = 15

ধর দাম = 200

ধর মোট = দাম + VAT

কও মোট
```

**Output**

```text
215
```

---

#### 🔹 Example 4: Attempt to Change a Constant

A constant cannot be reassigned after it has been declared.

```sylheti
পাক্কা PI = 3.1416

PI = 3

কও PI
```

**Output**

```text
Runtime Error:
Assignment to constant variable.
```

---

#### 💡 When Should You Use Constants?

Use constants whenever a value should remain the same throughout your program.

Common examples include:

- The value of π
- Company name
- Country name
- Tax percentage
- Maximum allowed limit
- Application configuration

---

#### ⚠️ Variable vs Constant

| Variable (`ধর`)        | Constant (`পাক্কা`)   |
| ---------------------- | --------------------- |
| Value can change       | Value cannot change   |
| Equivalent to `let`    | Equivalent to `const` |
| Used for changing data | Used for fixed data   |

---

#### 📝 Summary

- Use **`পাক্কা`** to declare a constant.
- A constant must be initialized when it is declared.
- Once assigned, its value cannot be changed.
- Constants make your programs safer and easier to maintain.

| SPL      | JavaScript |
| -------- | ---------- |
| `পাক্কা` | `const`    |

---

# 5.3 Data Types

Every value in a program has a **data type**. A data type defines what kind of value a variable stores and how that value can be used.

Since **Sylheti Programming Language (SPL)** is transpiled into JavaScript, it uses JavaScript's built-in data types.

The most commonly used data types are:

| Data Type | Description                                   | Example              |
| --------- | --------------------------------------------- | -------------------- |
| Number    | Stores numeric values                         | `১০`, `৩.১৪`         |
| String    | Stores text enclosed in quotes                | `"আসসালামু আলাইকুম"` |
| Boolean   | Represents true or false                      | `হাছা`, `মিছা`       |
| Null      | Represents an intentionally empty value       | `null`               |
| Undefined | Represents a value that has not been assigned | `undefined`          |

---

#### 🔹 Number

Numbers are used for mathematical calculations.

```sylheti
ধর বয়স = ২২

কও বয়স
```

**Output**

```text
22
```

---

#### 🔹 String

Strings are used to store text.

```sylheti
ধর নাম = "মনজুর"

কও নাম
```

**Output**

```text
মনজুর
```

---

#### 🔹 Boolean

Booleans represent two possible values:

- `হাছা` → `true`
- `মিছা` → `false`

```sylheti
ধর ছাত্র = হাছা

কও ছাত্র
```

**Output**

```text
true
```

---

#### 🔹 Number + String

Variables can store different types of values.

```sylheti
ধর নাম = "রহিম"
ধর বয়স = ২০

কও নাম
কও বয়স
```

**Output**

```text
রহিম
20
```

---

#### 🔹 Boolean Example

```sylheti
ধর বৃষ্টি = মিছা

যদি (না বৃষ্টি) {
    কও "আজকে ঘুরতে যামু!"
}
```

**Output**

```text
আজকে ঘুরতে যামু!
```

---

#### 💡 Choosing the Right Data Type

Use:

- **Number** for calculations.
- **String** for names, messages, and text.
- **Boolean** for conditions (`হাছা` / `মিছা`).
- **Null** when a value is intentionally empty.
- **Undefined** when a value has not been assigned.

---

#### 📝 Summary

- SPL supports the same basic data types as JavaScript.
- Use **Number** for numeric values.
- Use **String** for text.
- Use **Boolean** (`হাছা` / `মিছা`) for true or false values.
- Understanding data types helps you write reliable and predictable programs.

---

# 5.4 Input & Output

Every program communicates with users through **Input** and **Output**.

- **Input** allows a program to receive data from the user.
- **Output** allows a program to display information on the screen.

In **Sylheti Programming Language (SPL)**, output is displayed using the **`কও`** and **`চিল্লাইয়া_কও`** keywords.

| SPL Keyword     | JavaScript Equivalent | Description                                      |
| --------------- | --------------------- | ------------------------------------------------ |
| `কও`            | `console.log()`       | Display a message or value.                      |
| `চিল্লাইয়া_কও` | `console.log()`       | Display a message with a fun Sylheti expression. |
| `হুন`           | `prompt()`            | Receive input from the user.                     |

---

## 🔹 Output with `কও`

Use `কও` to print text, numbers, variables, or expressions.

```sylheti
কও "আসসালামু আলাইকুম!"
```

**Output**

```text
আসসালামু আলাইকুম!
```

---

## 🔹 Print a Variable

```sylheti
ধর নাম = "মনজুর"

কও নাম
```

**Output**

```text
মনজুর
```

---

## 🔹 Print Multiple Values

```sylheti
ধর নাম = "রহিম"
ধর বয়স = ২২

কও নাম
কও বয়স
```

**Output**

```text
রহিম
22
```

---

## 🔹 Using `চিল্লাইয়া_কও`

`চিল্লাইয়া_কও` works exactly like `কও`, but its name adds a fun Sylheti flavor to your programs.

```sylheti
চিল্লাইয়া_কও "আইলা রে বা!"
```

**Output**

```text
আইলা রে বা!
```

---

## 🔹 Taking User Input

Use `হুন` to receive input from the user.

```sylheti
ধর নাম = হুন("তুমার নাম কি?")

কও "স্বাগতম!"
কও নাম
```

**Example Interaction**

```text
তুমার নাম কি?
> মনজুর

স্বাগতম!
মনজুর
```

> **Note:** `হুন` is transpiled to JavaScript's `prompt()` function. It requires an environment where `prompt()` is available.

---

## 💡 When Should You Use Input & Output?

Use **Output** to:

- Display messages
- Show calculation results
- Print variable values
- Debug your program

Use **Input** to:

- Ask the user for information
- Read names or numbers
- Build interactive programs

---

## 📝 Summary

- Use **`কও`** to display output.
- Use **`চিল্লাইয়া_কও`** for the same purpose with a fun Sylheti keyword.
- Use **`হুন`** to receive user input.
- Input and output are the primary way your program communicates with users.

| SPL             | JavaScript      |
| --------------- | --------------- |
| `কও`            | `console.log()` |
| `চিল্লাইয়া_কও` | `console.log()` |
| `হুন`           | `prompt()`      |

---

# 5.5 Operators

Operators are special symbols or keywords used to perform operations on values and variables. They allow you to perform calculations, compare values, combine conditions, and assign data.

SPL supports most JavaScript operators. Some operators have native Sylheti keywords, while others use the standard JavaScript symbols.

---

## 🔹 Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Description         | Example  |
| -------- | ------------------- | -------- |
| `+`      | Addition            | `১০ + ৫` |
| `-`      | Subtraction         | `১০ - ৫` |
| `*`      | Multiplication      | `১০ * ৫` |
| `/`      | Division            | `১০ / ৫` |
| `%`      | Modulus (Remainder) | `১০ % ৩` |

### Example

```sylheti
ধর a = ১০
ধর b = ৫

কও a + b
কও a - b
কও a * b
কও a / b
কও a % b
```

**Output**

```text
15
5
50
2
1
```

---

## 🔹 Assignment Operator

The assignment operator is used to store a value inside a variable.

| Operator | Description    |
| -------- | -------------- |
| `=`      | Assign a value |

### Example

```sylheti
ধর নাম = "মনজুর"

কও নাম
```

**Output**

```text
মনজুর
```

---

## 🔹 Comparison Operators

Comparison operators compare two values and return either `হাছা` (`true`) or `মিছা` (`false`).

| SPL    | JavaScript | Description           |
| ------ | ---------- | --------------------- |
| `সমান` | `==`       | Loose equality        |
| `অইছে` | `===`      | Strict equality       |
| `>`    | `>`        | Greater than          |
| `<`    | `<`        | Less than             |
| `>=`   | `>=`       | Greater than or equal |
| `<=`   | `<=`       | Less than or equal    |
| `!=`   | `!=`       | Not equal             |

### Example

```sylheti
ধর বয়স = ২০

যদি (বয়স >= ১৮) {
    কও "Adult"
}
```

**Output**

```text
Adult
```

---

## 🔹 Logical Operators

Logical operators combine multiple conditions.

| SPL     | JavaScript | Description |
| ------- | ---------- | ----------- | --- | ---------- |
| `আর`    | `&&`       | Logical AND |
| `নয়লে` | `          |             | `   | Logical OR |
| `না`    | `!`        | Logical NOT |

### Example 1: AND (`আর`)

```sylheti
ধর বয়স = ২০
ধর ছাত্র = হাছা

যদি (বয়স >= ১৮ আর ছাত্র) {
    কও "Eligible"
}
```

**Output**

```text
Eligible
```

---

### Example 2: OR (`নয়লে`)

```sylheti
ধর শুক্রবার = মিছা
ধর ছুটি = হাছা

যদি (শুক্রবার নয়লে ছুটি) {
    কও "ঘুরতে যামু!"
}
```

**Output**

```text
ঘুরতে যামু!
```

---

### Example 3: NOT (`না`)

```sylheti
ধর বৃষ্টি = মিছা

যদি (না বৃষ্টি) {
    কও "বাইরে যামু!"
}
```

**Output**

```text
বাইরে যামু!
```

---

## 💡 Tips

- Use arithmetic operators for calculations.
- Use comparison operators inside `যদি` statements.
- Use logical operators to combine multiple conditions.
- Assignment (`=`) stores values in variables.

---

## 📝 Summary

- Arithmetic operators perform mathematical calculations.
- Assignment operators store values in variables.
- Comparison operators compare two values.
- Logical operators combine multiple conditions.
- SPL supports both Sylheti keywords and standard JavaScript operators.

---

# 5.6 Conditional Statements

Conditional statements allow your program to make decisions based on different conditions.

In real-world programs, we often need to perform different actions depending on a situation.

For example:

- If a user is logged in → show profile.
- If the password is correct → allow access.
- If a student gets good marks → show success message.

In **Sylheti Programming Language (SPL)**, conditional statements are created using:

| SPL Keyword  | JavaScript Equivalent | Purpose                                    |
| ------------ | --------------------- | ------------------------------------------ |
| `যদি`        | `if`                  | Execute code when a condition is true      |
| `নাঅইলে_যদি` | `else if`             | Check another condition                    |
| `নাঅইলে`     | `else`                | Execute code when all conditions are false |

---

## 🔹 5.6.1 If Statement (`যদি`)

The `যদি` statement executes a block of code only when a given condition is true.

### Syntax

```sylheti
যদি (condition) {
    // code
}
```

---

### Example: Check Age

```sylheti
ধর বয়স = ২০

যদি (বয়স >= ১৮) {
    কও "তুমি ভোট দিতে পারবা"
}
```

### Output

```text
তুমি ভোট দিতে পারবা
```

---

### Example: Check Number

```sylheti
ধর সংখ্যা = ১০

যদি (সংখ্যা > ০) {
    কও "ইডা পজিটিভ সংখ্যা"
}
```

### Output

```text
ইডা পজিটিভ সংখ্যা
```

---

## 🔹 5.6.2 Else Statement (`নাঅইলে`)

The `নাঅইলে` statement runs when the `যদি` condition is false.

### Syntax

```sylheti
যদি (condition) {
    // true block
}
নাঅইলে {
    // false block
}
```

---

### Example: Age Verification

```sylheti
ধর বয়স = ১২

যদি (বয়স >= ১৮) {
    কও "Adult"
}
নাঅইলে {
    কও "Child"
}
```

### Output

```text
Child
```

---

## 🔹 5.6.3 Else If Statement (`নাঅইলে_যদি`)

Sometimes we need to check multiple conditions.

For this purpose, SPL provides `নাঅইলে_যদি`.

### Syntax

```sylheti
যদি (condition1) {

}
নাঅইলে_যদি (condition2) {

}
নাঅইলে {

}
```

---

### Example: Student Grade System

```sylheti
ধর নম্বর = ৮৫

যদি (নম্বর >= ৯০) {
    কও "A+"
}
নাঅইলে_যদি (নম্বর >= ৮০) {
    কও "A"
}
নাঅইলে_যদি (নম্বর >= ৭০) {
    কও "B"
}
নাঅইলে {
    কও "Fail"
}
```

### Output

```text
A
```

---

## 🔹 5.6.4 Using Logical Operators with Conditions

Conditions can be combined using logical operators.

Available SPL logical keywords:

| SPL | Equivalent |
| :--- | :--- |
| `আর` | `&&` |
| `নয়লে` | `\|\|` |
| `না` | `!` |

---

### Example: Multiple Conditions

```sylheti
ধর বয়স = ২২
ধর অনুমতি = হাছা

যদি (বয়স >= ১৮ আর অনুমতি) {
    কও "প্রবেশ অনুমোদিত"
}
নাঅইলে {
    কও "প্রবেশ নিষেধ"
}
```

### Output

```text
প্রবেশ অনুমোদিত
```

---

## 🔹 5.6.5 Nested Conditions

A condition can contain another condition inside it.

### Example

```sylheti
ধর বয়স = ২০
ধর টাকা = ১০০

যদি (বয়স >= ১৮) {

    যদি (টাকা >= ৫০) {
        কও "টিকেট কিনতে পারবা"
    }

}
```

### Output

```text
টিকেট কিনতে পারবা
```

---

# 💡 When Should You Use Conditional Statements?

Use conditional statements when your program needs decision-making.

Common examples:

- Login systems
- Student grading
- Age checking
- Game rules
- Permission checking
- Menu selection

---

# ⚠️ Common Mistakes

❌ Wrong:

```sylheti
যদি বয়স >= ১৮ {
    কও "Hello"
}
```

✅ Correct:

```sylheti
যদি (বয়স >= ১৮) {
    কও "Hello"
}
```

Always use parentheses around conditions.

---

# 📝 Summary

- Use **`যদি`** to check a condition.
- Use **`নাঅইলে_যদি`** for multiple conditions.
- Use **`নাঅইলে`** when no condition is true.
- Conditions usually return `হাছা` (true) or `মিছা` (false).
- Combine conditions using `আর`, `নয়লে`, and `না`.

| SPL Keyword  | JavaScript |
| ------------ | ---------- |
| `যদি`        | `if`       |
| `নাঅইলে_যদি` | `else if`  |
| `নাঅইলে`     | `else`     |

Control program flow using `যদি`, `নাঅইলে_যদি`, and `নাঅইলে`.

---

# 5.7 Loops

Loops are used to **repeat a block of code multiple times** without writing the same code again and again.

In programming, many tasks require repetition. For example:

- Printing numbers from 1 to 10
- Processing a list of items
- Repeating a game action
- Counting something

Instead of writing the same code many times, we use loops.

In **Sylheti Programming Language (SPL)**, loops are created using:

| SPL Keyword | JavaScript Equivalent | Purpose                             |
| ----------- | --------------------- | ----------------------------------- |
| `ঘুর`       | `for`                 | Repeat code with a counter          |
| `যতক্ষণ`    | `while`               | Repeat while a condition is true    |
| `থাম`       | `break`               | Stop a loop immediately             |
| `আগাও`      | `continue`            | Skip current iteration and continue |

---

## 🔹 5.7.1 For Loop (`ঘুর`)

The `ঘুর` loop is used when you know how many times you want to repeat something.

### Syntax

```sylheti
ঘুর (initialization; condition; update) {

}
```

---

### Example: Print Numbers

```sylheti
ঘুর (ধর i = ১; i <= ৫; i++) {

    কও i

}
```

### Output

```text
1
2
3
4
5
```

---

### Example: Countdown

```sylheti
ঘুর (ধর i = ৫; i >= ১; i--) {

    কও i

}
```

### Output

```text
5
4
3
2
1
```

---

## 🔹 5.7.2 While Loop (`যতক্ষণ`)

The `যতক্ষণ` loop runs continuously as long as a condition remains true.

### Syntax

```sylheti
যতক্ষণ (condition) {

}
```

---

### Example: Counting with While

```sylheti
ধর i = ১

যতক্ষণ (i <= ৫) {

    কও i

    i++

}
```

### Output

```text
1
2
3
4
5
```

---

## 🔹 5.7.3 Using `break` (`থাম`)

The `থাম` keyword stops a loop immediately.

### Example

```sylheti
ঘুর (ধর i = ১; i <= ১০; i++) {

    যদি (i == ৫) {
        থাম
    }

    কও i

}
```

### Output

```text
1
2
3
4
```

---

## 🔹 5.7.4 Using `continue` (`আগাও`)

The `আগাও` keyword skips the current loop iteration and moves to the next one.

### Example

```sylheti
ঘুর (ধর i = ১; i <= ৫; i++) {

    যদি (i == ৩) {
        আগাও
    }

    কও i

}
```

### Output

```text
1
2
4
5
```

---

## 🔹 5.7.5 Nested Loops

A loop can contain another loop. This is called a nested loop.

### Example: Multiplication Table

```sylheti
ঘুর (ধর i = ১; i <= ৩; i++) {

    ঘুর (ধর j = ১; j <= ৩; j++) {

        কও i * j

    }

}
```

### Output

```text
1
2
3
2
4
6
3
6
9
```

---

# 💡 When Should You Use Loops?

Use loops when you need to repeat actions.

Common examples:

- Printing lists
- Processing data
- Counting numbers
- Searching items
- Creating patterns
- Running repeated tasks

---

# ⚠️ Common Mistakes

### ❌ Infinite Loop

```sylheti
ধর i = ১

যতক্ষণ (i <= ৫) {

    কও i

}
```

This loop never ends because `i` is never updated.

---

### ✅ Correct Version

```sylheti
ধর i = ১

যতক্ষণ (i <= ৫) {

    কও i

    i++

}
```

---

# 📝 Summary

- Use **`ঘুর`** when you know the number of repetitions.
- Use **`যতক্ষণ`** when repetition depends on a condition.
- Use **`থাম`** to exit a loop early.
- Use **`আগাও`** to skip an iteration.
- Loops help reduce repeated code and make programs cleaner.

| SPL Keyword | JavaScript |
| ----------- | ---------- |
| `ঘুর`       | `for`      |
| `যতক্ষণ`    | `while`    |
| `থাম`       | `break`    |
| `আগাও`      | `continue` |

---

# 5.8 Functions

Functions are reusable blocks of code that perform a specific task.

Instead of writing the same code multiple times, we can create a function once and call it whenever we need it.

Functions help you:

- Reduce code repetition
- Organize programs into smaller parts
- Make code easier to read and maintain
- Build large programs step by step

In **Sylheti Programming Language (SPL)**, functions are created using:

| SPL Keyword | JavaScript Equivalent | Purpose                        |
| ----------- | --------------------- | ------------------------------ |
| `কাম`       | `function`            | Create a function              |
| `ফিরা_দে`   | `return`              | Return a value from a function |
| `ছোট_কাম`   | `=>`                  | Create an arrow function       |

---

## 🔹 5.8.1 Creating a Function (`কাম`)

The `কাম` keyword is used to define a function.

### Syntax

```sylheti
কাম function_name() {

    // code

}
```

---

### Example: Simple Function

```sylheti
কাম সালাম() {

    কও "আসসালামু আলাইকুম"

}

সালাম()
```

### Output

```text
আসসালামু আলাইকুম
```

---

## 🔹 5.8.2 Function with Parameters

Functions can receive values called parameters.

Parameters allow the same function to work with different data.

### Example

```sylheti
কাম স্বাগতম(নাম) {

    কও "স্বাগতম " + নাম

}

স্বাগতম("মনজুর")
```

### Output

```text
স্বাগতম মনজুর
```

---

## 🔹 5.8.3 Multiple Parameters

A function can accept multiple values.

### Example

```sylheti
কাম যোগ(a, b) {

    কও a + b

}

যোগ(১০, ২০)
```

### Output

```text
30
```

---

## 🔹 5.8.4 Returning Values (`ফিরা_দে`)

The `ফিরা_দে` keyword sends a value back from a function.

A returned value can be stored in a variable or used in another calculation.

### Syntax

```sylheti
কাম function_name() {

    ফিরা_দে value

}
```

---

### Example: Return Sum

```sylheti
কাম যোগ(a, b) {

    ফিরা_দে a + b

}

ধর ফলাফল = যোগ(১০, ২০)

কও ফলাফল
```

### Output

```text
30
```

---

## 🔹 5.8.5 Function with Condition

Functions can contain other programming logic.

### Example

```sylheti
কাম পরীক্ষা(নম্বর) {

    যদি (নম্বর >= ৪০) {

        ফিরা_দে "পাস"

    }
    নাঅইলে {

        ফিরা_দে "ফেল"

    }

}

কও পরীক্ষা(৫০)
```

### Output

```text
পাস
```

---

## 🔹 5.8.6 Arrow Function (`ছোট_কাম`)

Arrow functions provide a shorter way to write functions.

In SPL, `ছোট_কাম` represents JavaScript's arrow function syntax.

### Example

```sylheti
ধর যোগ = (a, b) ছোট_কাম a + b

কও যোগ(৫, ১০)
```

### Output

```text
15
```

---

## 🔹 5.8.7 Real World Example

Functions are useful for creating reusable features.

### Example: Calculate Total Price

```sylheti
কাম মোট_দাম(দাম, পরিমাণ) {

    ফিরা_দে দাম * পরিমাণ

}

ধর ফলাফল = মোট_দাম(৫০, ৩)

কও ফলাফল
```

### Output

```text
150
```

---

# 💡 When Should You Use Functions?

Use functions when:

- You need to reuse the same logic multiple times.
- Your program becomes large.
- You want to organize code into smaller sections.
- You want easier debugging and maintenance.

Examples:

- Calculator functions
- Login systems
- Data processing
- Game actions
- Mathematical operations

---

# ⚠️ Common Mistakes

### ❌ Calling a function before creating it incorrectly

```sylheti
সালাম()

কাম সালাম() {
    কও "Hello"
}
```

---

### ✅ Better Approach

```sylheti
কাম সালাম() {

    কও "Hello"

}

সালাম()
```

---

# 📝 Summary

- Use **`কাম`** to create functions.
- Functions allow code reuse.
- Use parameters to send data into functions.
- Use **`ফিরা_দে`** to return values.
- Use **`ছোট_কাম`** for shorter arrow functions.

| SPL Keyword | JavaScript |
| ----------- | ---------- |
| `কাম`       | `function` |
| `ফিরা_দে`   | `return`   |
| `ছোট_কাম`   | `=>`       |

---

# 5.9 Object-Oriented Programming (OOP)

**Object-Oriented Programming (OOP)** is a programming style where we organize code using **objects and classes**.

An object represents a real-world thing with:

- **Properties** → Data or information about the object
- **Methods** → Actions that the object can perform

For example:

A `Student` object can have:

- Name
- Age
- Roll Number

And it can perform actions like:

- Show information
- Calculate results

OOP helps you:

- Organize large programs
- Reuse code
- Reduce complexity
- Build scalable applications

In **Sylheti Programming Language (SPL)**, OOP is supported using:

| SPL Keyword | JavaScript Equivalent | Purpose                    |
| ----------- | --------------------- | -------------------------- |
| `জাত`       | `class`               | Create a class             |
| `নয়া`      | `new`                 | Create a new object        |
| `নিজর`      | `this`                | Access current object      |
| `টান`       | `extends`             | Inherit from another class |
| `বড়_আব্বা`  | `super`               | Access parent class        |

---

## 🔹 5.9.1 Creating a Class (`জাত`)

A class is a blueprint for creating objects.

### Syntax

```sylheti
জাত ClassName {

    // properties
    // methods

}
```

---

### Example: Create a Student Class

```sylheti
জাত ছাত্র {

    পরিচয়() {

        কও "আমি একজন ছাত্র"

    }

}
```

Here:

- `জাত` creates a class.
- `পরিচয়()` is a method inside the class.

---

## 🔹 5.9.2 Creating an Object (`নয়া`)

An object is an instance of a class.

Use the `নয়া` keyword to create a new object.

### Example

```sylheti
জাত ছাত্র {

    পরিচয়() {

        কও "আমি একজন ছাত্র"

    }

}


ধর ব্যক্তি = নয়া ছাত্র()

ব্যক্তি.পরিচয়()
```

### Output

```text
আমি একজন ছাত্র
```

---

## 🔹 5.9.3 Using Constructor

A constructor is a special method that runs automatically when an object is created.

Constructors are used to initialize object data.

### Example

```sylheti
জাত মানুষ {

    constructor(নাম) {

        নিজর.নাম = নাম

    }


    দেখাও() {

        কও নিজর.নাম

    }

}


ধর ব্যক্তি = নয়া মানুষ("মনজুর")

ব্যক্তি.দেখাও()
```

### Output

```text
মনজুর
```

---

## 🔹 5.9.4 Object Properties (`নিজর`)

The `নিজর` keyword refers to the current object.

It is used to access properties and methods inside a class.

### Example

```sylheti
জাত মোবাইল {

    constructor(ব্র্যান্ড) {

        নিজর.ব্র্যান্ড = ব্র্যান্ড

    }


    তথ্য() {

        কও নিজর.ব্র্যান্ড

    }

}


ধর ফোন = নয়া মোবাইল("Samsung")

ফোন.তথ্য()
```

### Output

```text
Samsung
```

---

## 🔹 5.9.5 Inheritance (`টান`)

Inheritance allows one class to use the features of another class.

A child class can extend a parent class.

### Syntax

```sylheti
জাত Child টান Parent {

}
```

---

### Example

```sylheti
জাত প্রাণী {

    শব্দ() {

        কও "প্রাণী শব্দ করে"

    }

}


জাত কুকুর টান প্রাণী {


}


ধর আমার_কুকুর = নয়া কুকুর()

আমার_কুকুর.শব্দ()
```

### Output

```text
প্রাণী শব্দ করে
```

---

## 🔹 5.9.6 Parent Class Access (`বড়_আব্বা`)

The `বড়_আব্বা` keyword is used to call parent class methods or constructors.

### Example

```sylheti
জাত প্রাণী {

    শব্দ() {

        কও "শব্দ"

    }

}


জাত কুকুর টান প্রাণী {

    শব্দ() {

        বড়_আব্বা.শব্দ()

        কও "ঘেউ ঘেউ"

    }

}


ধর কুকুর১ = নয়া কুকুর()

কুকুর১.শব্দ()
```

### Output

```text
শব্দ
ঘেউ ঘেউ
```

---

## 🔹 5.9.7 Real World Example: Bank Account

OOP is useful for creating real-world models.

### Example

```sylheti
জাত ব্যাংক {

    constructor(নাম, টাকা) {

        নিজর.নাম = নাম

        নিজর.টাকা = টাকা

    }


    দেখাও() {

        কও নিজর.নাম

        কও নিজর.টাকা

    }

}


ধর হিসাব = নয়া ব্যাংক("মনজুর", ৫০০০)

হিসাব.দেখাও()
```

### Output

```text
মনজুর
5000
```

---

# 💡 When Should You Use OOP?

Use OOP when:

- Your program is large.
- You need reusable components.
- You want to represent real-world objects.
- Multiple objects share similar behavior.

Common examples:

- Banking systems
- Student management systems
- Games
- E-commerce applications
- User management systems

---

# ⚠️ Common Mistakes

### ❌ Creating object without class

```sylheti
ধর মানুষ = নয়া ব্যক্তি()
```

A class must exist before creating an object.

---

### ✅ Correct

```sylheti
জাত ব্যক্তি {

}

ধর মানুষ = নয়া ব্যক্তি()
```

---

# 📝 Summary

- Use **`জাত`** to create classes.
- Use **`নয়া`** to create objects.
- Use **`নিজর`** to access object properties.
- Use **`টান`** for inheritance.
- Use **`বড়_আব্বা`** to access parent class features.
- OOP helps create organized and reusable programs.

| SPL Keyword | JavaScript |
| ----------- | ---------- |
| `জাত`       | `class`    |
| `নয়া`      | `new`      |
| `নিজর`      | `this`     |
| `টান`       | `extends`  |
| `বড়_আব্বা`  | `super`    |

---

# 5.10 Error Handling

Errors are common in programming. A program may fail because of invalid input, missing data, or unexpected situations.

**Error Handling** allows your program to detect problems and handle them gracefully instead of stopping suddenly.

For example:

- A user enters invalid information.
- A file is missing.
- A calculation fails.
- A network request does not work.

In **Sylheti Programming Language (SPL)**, error handling is done using:

| SPL Keyword  | JavaScript Equivalent | Purpose                      |
| ------------ | --------------------- | ---------------------------- |
| `চেষ্টা`     | `try`                 | Try to execute risky code    |
| `আটকাইও`     | `catch`               | Handle an error              |
| `শেষমেশ`     | `finally`             | Execute code after try/catch |
| `ছুইড়া_মার` | `throw`               | Create a custom error        |
| `গণ্ডগোল`    | `Error`               | Create an error object       |

---

## 🔹 5.10.1 Try Block (`চেষ্টা`)

The `চেষ্টা` block contains code that may produce an error.

If an error occurs, the program moves to the `আটকাইও` block.

### Syntax

```sylheti
চেষ্টা {

    // risky code

}
আটকাইও {

    // handle error

}
```

---

### Example: Basic Error Handling

```sylheti
চেষ্টা {

    ধর ফলাফল = ১০ / ০

    কও ফলাফল

}

আটকাইও {

    কও "একটা সমস্যা হইছে!"

}
```

### Output

```text
একটা সমস্যা হইছে!
```

---

## 🔹 5.10.2 Catch Block (`আটকাইও`)

The `আটকাইও` block receives and handles the error.

It prevents the program from crashing.

### Example

```sylheti
চেষ্টা {

    ধর সংখ্যা = ভুল_ডাটা

}

আটকাইও (err) {

    কও "Error পাওয়া গেছে"

}
```

### Output

```text
Error পাওয়া গেছে
```

---

## 🔹 5.10.3 Finally Block (`শেষমেশ`)

The `শেষমেশ` block always runs, whether an error happens or not.

It is commonly used for cleanup tasks.

### Syntax

```sylheti
চেষ্টা {

}
আটকাইও {

}
শেষমেশ {

}
```

---

### Example

```sylheti
চেষ্টা {

    কও "কাজ শুরু"

}

আটকাইও {

    কও "সমস্যা"

}

শেষমেশ {

    কও "কাজ শেষ"

}
```

### Output

```text
কাজ শুরু
কাজ শেষ
```

---

## 🔹 5.10.4 Creating Custom Errors (`ছুইড়া_মার`)

Sometimes we need to create our own errors.

The `ছুইড়া_মার` keyword is used for this purpose.

### Example

```sylheti
কাম বয়স_চেক(বয়স) {

    যদি (বয়স < ১৮) {

        ছুইড়া_মার "বয়স কম!"

    }

    কও "অনুমোদিত"

}


চেষ্টা {

    বয়স_চেক(১৫)

}

আটকাইও {

    কও "ভুল বয়স দেওয়া হইছে"

}
```

### Output

```text
ভুল বয়স দেওয়া হইছে
```

---

## 🔹 5.10.5 Using Error Object (`গণ্ডগোল`)

Errors can contain additional information.

### Example

```sylheti
চেষ্টা {

    ছুইড়া_মার নয়া গণ্ডগোল("নিজের Error")

}

আটকাইও (err) {

    কও err.message

}
```

### Output

```text
নিজের Error
```

---

## 🔹 5.10.6 Real World Example: Login System

Error handling is useful in real applications.

### Example

```sylheti
কাম লগইন(পাসওয়ার্ড) {

    যদি (পাসওয়ার্ড != "1234") {

        ছুইড়া_মার "ভুল পাসওয়ার্ড"

    }

    ফিরা_দে "Login Success"

}


চেষ্টা {

    কও লগইন("1111")

}

আটকাইও {

    কও "Login Failed"

}
```

### Output

```text
Login Failed
```

---

# 💡 When Should You Use Error Handling?

Use error handling when:

- User input may be incorrect.
- External resources may fail.
- A function may produce unexpected results.
- You want your program to continue safely.

Common examples:

- Login systems
- File handling
- Database operations
- API requests
- Payment systems

---

# ⚠️ Common Mistakes

### ❌ Without Error Handling

```sylheti
ছুইড়া_মার "Problem"
```

The program may stop immediately.

---

### ✅ Better Approach

```sylheti
চেষ্টা {

    ছুইড়া_মার "Problem"

}

আটকাইও {

    কও "Error handled"

}
```

---

# 📝 Summary

- Use **`চেষ্টা`** to test risky code.
- Use **`আটকাইও`** to handle errors.
- Use **`শেষমেশ`** for code that always needs to run.
- Use **`ছুইড়া_মার`** to create custom errors.
- Error handling makes programs safer and more reliable.

| SPL Keyword  | JavaScript |
| ------------ | ---------- |
| `চেষ্টা`     | `try`      |
| `আটকাইও`     | `catch`    |
| `শেষমেশ`     | `finally`  |
| `ছুইড়া_মার` | `throw`    |
| `গণ্ডগোল`    | `Error`    |

---

# 5.11 Asynchronous Programming

Asynchronous programming allows a program to perform tasks **without blocking the execution of other code**.

In normal (synchronous) programming, tasks are executed one after another. If one task takes a long time, the program has to wait.

Asynchronous programming allows your program to start a task and continue doing other work while waiting for the result.

Real-world examples:

- Downloading a file
- Fetching data from an API
- Reading a database
- Sending messages
- Waiting for user actions

In **Sylheti Programming Language (SPL)**, asynchronous programming uses:

| SPL Keyword  | JavaScript Equivalent | Purpose                         |
| ------------ | --------------------- | ------------------------------- |
| `পরে_কর`     | `async`               | Create an asynchronous function |
| `অপেক্ষা_কর` | `await`               | Wait for a Promise result       |
| `কথা_দিলাম`  | `Promise`             | Create a Promise                |

---

## 🔹 5.11.1 Async Function (`পরে_কর`)

The `পরে_কর` keyword creates an asynchronous function.

An async function always returns a Promise.

### Syntax

```sylheti
পরে_কর কাম function_name() {

}
```

---

### Example: Async Function

```sylheti
পরে_কর কাম সালাম() {

    ফিরা_দে "আসসালামু আলাইকুম"

}


সালাম()
```

### Output

```text
আসসালামু আলাইকুম
```

---

## 🔹 5.11.2 Promise (`কথা_দিলাম`)

A Promise represents a value that may be available now, later, or never.

A Promise has three states:

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | Waiting for result               |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

---

### Example: Creating a Promise

```sylheti
ধর কাজ = নয়া কথা_দিলাম((resolve, reject) => {

    resolve("কাজ শেষ")

})


কও কাজ
```

### Output

```text
কাজ শেষ
```

---

## 🔹 5.11.3 Await (`অপেক্ষা_কর`)

The `অপেক্ষা_কর` keyword pauses an async function until a Promise is completed.

### Example

```sylheti
পরে_কর কাম তথ্য_নেওয়া() {

    ধর ফলাফল = অপেক্ষা_কর ডাটা_আনা()

    কও ফলাফল

}
```

The program waits for `ডাটা_আনা()` to complete before continuing.

---

## 🔹 5.11.4 Real World Example: Data Loading

Asynchronous programming is commonly used when loading data.

### Example

```sylheti
কথা_দিলাম কাম ডাটা_আনা() {

    ফিরা_দে "ডাটা পাওয়া গেছে"

}


পরে_কর কাম শুরু() {

    ধর ডাটা = অপেক্ষা_কর ডাটা_আনা()

    কও ডাটা

}


শুরু()
```

### Output

```text
ডাটা পাওয়া গেছে
```

---

## 🔹 5.11.5 Handling Async Errors

Async operations can also produce errors.

Combine asynchronous programming with error handling.

### Example

```sylheti
পরে_কর কাম ডাটা() {

    চেষ্টা {

        ধর ফলাফল = অপেক্ষা_কর সার্ভার_থেকে_নেও()

        কও ফলাফল

    }

    আটকাইও {

        কও "ডাটা পাওয়া যায় নাই"

    }

}
```

### Output

```text
ডাটা পাওয়া যায় নাই
```

---

# 💡 When Should You Use Asynchronous Programming?

Use asynchronous programming when:

- A task takes time to complete.
- You need to communicate with external services.
- You need better application performance.

Common examples:

- Web API calls
- Database queries
- File operations
- Online services
- Real-time applications

---

# ⚠️ Synchronous vs Asynchronous

| Synchronous                      | Asynchronous                   |
| -------------------------------- | ------------------------------ |
| Executes one task at a time      | Can handle waiting tasks       |
| Blocks execution                 | Does not block execution       |
| Simple but slower for long tasks | Better for modern applications |

---

# 📝 Summary

- Use **`পরে_কর`** to create async functions.
- Use **`অপেক্ষা_কর`** to wait for Promise results.
- Use **`কথা_দিলাম`** to create Promises.
- Async programming helps build faster and more responsive applications.

| SPL Keyword  | JavaScript |
| ------------ | ---------- |
| `পরে_কর`     | `async`    |
| `অপেক্ষা_কর` | `await`    |
| `কথা_দিলাম`  | `Promise`  |

---

# 5.12 Comments

Comments are notes written inside your source code that are **ignored by the compiler**.

Comments help programmers:

- Explain difficult code
- Remember important information
- Leave notes for future improvements
- Make code easier to understand

Comments do not affect how your program runs.

In **Sylheti Programming Language (SPL)**, comments use fun Sylheti keywords:

| SPL Keyword   | JavaScript Equivalent | Purpose                     |
| ------------- | --------------------- | --------------------------- |
| `ফাজলামি`     | `//`                  | Write a normal comment      |
| `পরে_দেখুম`   | `// TODO:`            | Add a future task note      |
| `এইডা_ঠিক_কর` | `// FIXME:`           | Mark code that needs fixing |
| `মনে_রাখ`     | `// NOTE:`            | Add an important note       |

---

## 🔹 5.12.1 Normal Comments (`ফাজলামি`)

Use `ফাজলামি` to write comments in your code.

Comments are ignored during execution.

### Example

```sylheti
ফাজলামি এইটা একটা মন্তব্য

কও "Hello SPL"
```

### Output

```text
Hello SPL
```

The comment does not appear in the output.

---

## 🔹 5.12.2 Explaining Code

Comments help other developers understand your code.

### Example

```sylheti
ফাজলামি User name store করার জন্য variable

ধর নাম = "মনজুর"

কও নাম
```

### Output

```text
মনজুর
```

---

## 🔹 5.12.3 TODO Notes (`পরে_দেখুম`)

Use `পরে_দেখুম` when you want to remember a task that should be completed later.

### Example

```sylheti
পরে_দেখুম Login system add করতে হবে

কও "Application Started"
```

Converted JavaScript:

```javascript
// TODO: Login system add করতে হবে

console.log("Application Started");
```

---

## 🔹 5.12.4 FIXME Notes (`এইডা_ঠিক_কর`)

Use `এইডা_ঠিক_কর` to mark code that contains a problem and needs improvement.

### Example

```sylheti
এইডা_ঠিক_কর এই calculation পরে ঠিক করতে হবে

ধর ফলাফল = ১০

কও ফলাফল
```

Converted JavaScript:

```javascript
// FIXME: এই calculation পরে ঠিক করতে হবে
```

---

## 🔹 5.12.5 Important Notes (`মনে_রাখ`)

Use `মনে_রাখ` to add important information about your code.

### Example

```sylheti
মনে_রাখ এই function user data process করে

কাম তথ্য_দেখাও() {

    কও "User Data"

}
```

Converted JavaScript:

```javascript
// NOTE: এই function user data process করে
```

---

## 🔹 5.12.6 Real Project Example

In real projects, comments help developers maintain code.

### Example

```sylheti
মনে_রাখ Database connection এখানে হবে

ধর server = "Running"

পরে_দেখুম Authentication system add করা লাগবে

কও server
```

### Output

```text
Running
```

---

# 💡 When Should You Write Comments?

Use comments when:

- Code logic is difficult to understand.
- You need reminders for future work.
- You are working in a team.
- You want to explain important decisions.

Avoid writing unnecessary comments for obvious code.

Example:

❌ Bad:

```sylheti
ফাজলামি এইটা ১০ যোগ করে

ধর সংখ্যা = ১০ + ৫
```

The code is already clear.

✅ Better:

```sylheti
মনে_রাখ এই value API limit check করার জন্য ব্যবহার হচ্ছে

ধর limit = ৫
```

---

# 📝 Summary

- Comments are ignored by the compiler.
- Use comments to explain and document your code.
- Use `ফাজলামি` for normal comments.
- Use `পরে_দেখুম` for future tasks.
- Use `এইডা_ঠিক_কর` for fixing issues.
- Use `মনে_রাখ` for important notes.

| SPL Keyword   | JavaScript  |
| ------------- | ----------- |
| `ফাজলামি`     | `//`        |
| `পরে_দেখুম`   | `// TODO:`  |
| `এইডা_ঠিক_কর` | `// FIXME:` |
| `মনে_রাখ`     | `// NOTE:`  |

---

# 5.13 Built-in Utilities

Built-in utilities are ready-made features that help programmers perform common tasks easily.

Instead of writing everything from scratch, you can use these utilities directly in your programs.

SPL provides some useful built-in utilities inspired by JavaScript's standard features.

Currently available utilities:

| SPL Keyword   | JavaScript Equivalent | Purpose                    |
| ------------- | --------------------- | -------------------------- |
| `আল্লার_ভরসা` | `Math.random()`       | Generate a random number   |
| `লম্বা`       | `.length`             | Find the length of a value |

---

## 🔹 5.13.1 Random Number Generation (`আল্লার_ভরসা`)

Random numbers are useful when creating:

- Games
- Simulations
- Random selections
- Testing programs

The `আল্লার_ভরসা` keyword generates a random value.

### Example

```sylheti
কও আল্লার_ভরসা()
```

### Example Output

```text
0.734829
```

> The output will be different every time.

---

## 🔹 5.13.2 Using Random Values

You can store random values inside variables.

### Example

```sylheti
ধর সংখ্যা = আল্লার_ভরসা()

কও সংখ্যা
```

### Output

```text
0.452183
```

---

## 🔹 5.13.3 Finding Length (`লম্বা`)

The `লম্বা` utility is used to find the size of strings, arrays, and other collections.

### Example: String Length

```sylheti
ধর নাম = "সিলেট"

কও নাম.লম্বা
```

### Output

```text
5
```

---

## 🔹 5.13.4 Working with Arrays

You can find the number of items inside an array.

### Example

```sylheti
ধর ফল = ["আম", "কাঁঠাল", "লিচু"]

কও ফল.লম্বা
```

### Output

```text
3
```

---

## 🔹 5.13.5 Real World Example

Generate a random lucky number:

```sylheti
ধর লাকি = আল্লার_ভরসা()

কও "তোমার Lucky Number:"
কও লাকি
```

### Output

```text
তোমার Lucky Number:
0.829341
```

---

# 💡 When Should You Use Built-in Utilities?

Use built-in utilities when you need:

- Random values
- Data size calculation
- Common programming operations
- Faster and cleaner solutions

Examples:

- Games
- Password generators
- Data processing
- User applications

---

# ⚠️ Common Mistakes

### ❌ Wrong

```sylheti
ধর নাম = "SPL"

কও নাম.লম্বা()
```

`লম্বা` is a property, not a function.

---

### ✅ Correct

```sylheti
ধর নাম = "SPL"

কও নাম.লম্বা
```

---

# 📝 Summary

- Built-in utilities make programming easier.
- Use `আল্লার_ভরসা` for random number generation.
- Use `লম্বা` to find the size of data.
- Utilities help write shorter and cleaner programs.

| SPL Keyword   | JavaScript      |
| ------------- | --------------- |
| `আল্লার_ভরসা` | `Math.random()` |
| `লম্বা`       | `.length`       |

--

# 7. 📚 Keyword Reference

This section contains the complete list of **Sylheti Programming Language (SPL)** keywords and their equivalent programming concepts.

If you are a beginner, we recommend learning from the previous chapters first. The examples above show how each keyword works in real programs.

This table is a quick reference guide for experienced users.

---

## 📦 Variables & Values

| SPL Keyword | Equivalent  | Description         |
| ----------- | ----------- | ------------------- |
| `ধর`        | `let`       | Declare a variable  |
| `পাক্কা`    | `const`     | Declare a constant  |
| `হাছা`      | `true`      | Boolean true value  |
| `মিছা`      | `false`     | Boolean false value |
| `খালি`      | `null`      | Empty value         |
| `নাই`       | `undefined` | Undefined value     |

---

## 🔀 Conditional Statements

| SPL Keyword  | Equivalent | Description                         |
| ------------ | ---------- | ----------------------------------- |
| `যদি`        | `if`       | Execute code when condition is true |
| `নাঅইলে_যদি` | `else if`  | Check another condition             |
| `নাঅইলে`     | `else`     | Execute when conditions are false   |
| `বাছ`        | `switch`   | Multiple condition selection        |
| `দফা`        | `case`     | A switch case                       |
| `যা_অউক`     | `default`  | Default switch option               |

---

## 🔁 Loops

| SPL Keyword | Equivalent | Description                    |
| ----------- | ---------- | ------------------------------ |
| `ঘুর`       | `for`      | Repeat using counter           |
| `যতক্ষণ`    | `while`    | Repeat while condition is true |
| `কর`        | `do`       | Execute loop block             |
| `থাম`       | `break`    | Stop loop                      |
| `আগাও`      | `continue` | Skip current iteration         |

---

## 🧠 Functions

| SPL Keyword | Equivalent | Description       |
| ----------- | ---------- | ----------------- |
| `কাম`       | `function` | Create a function |
| `ফিরা_দে`   | `return`   | Return a value    |
| `ছোট_কাম`   | `=>`       | Arrow function    |
| `একটু_দে`   | `yield`    | Generator output  |

---

## 📤 Input & Output

| SPL Keyword     | Equivalent      | Description      |
| --------------- | --------------- | ---------------- |
| `কও`            | `console.log()` | Print output     |
| `চিল্লাইয়া_কও` | `console.log()` | Fun style output |
| `হুন`           | `prompt()`      | Take user input  |
| `পড়`           | `read`          | Read data        |
| `লেখ`           | `write`         | Write data       |
| `দেখ`           | `scan`          | Scan input       |

---

## 🏛️ Object-Oriented Programming

| SPL Keyword | Equivalent  | Description              |
| ----------- | ----------- | ------------------------ |
| `জাত`       | `class`     | Create class             |
| `নয়া`      | `new`       | Create object            |
| `নিজর`      | `this`      | Current object reference |
| `টান`       | `extends`   | Class inheritance        |
| `বড়_আব্বা`  | `super`     | Parent class reference   |
| `নিয়ম`     | `interface` | Interface definition     |
| `খোলা`      | `public`    | Public access            |
| `নিজের`     | `private`   | Private access           |

---

## ⚠️ Error Handling

| SPL Keyword  | Equivalent | Description          |
| ------------ | ---------- | -------------------- |
| `চেষ্টা`     | `try`      | Test risky code      |
| `আটকাইও`     | `catch`    | Handle errors        |
| `শেষমেশ`     | `finally`  | Always execute block |
| `ছুইড়া_মার` | `throw`    | Create an error      |
| `গণ্ডগোল`    | `Error`    | Error object         |

---

## ⚡ Asynchronous Programming

| SPL Keyword  | Equivalent | Description     |
| ------------ | ---------- | --------------- |
| `পরে_কর`     | `async`    | Async function  |
| `অপেক্ষা_কর` | `await`    | Wait for result |
| `কথা_দিলাম`  | `Promise`  | Promise object  |

---

## 💬 Comments

| SPL Keyword   | Equivalent  | Description      |
| ------------- | ----------- | ---------------- |
| `ফাজলামি`     | `//`        | Normal comment   |
| `পরে_দেখুম`   | `// TODO:`  | Future task note |
| `এইডা_ঠিক_কর` | `// FIXME:` | Fix required     |
| `মনে_রাখ`     | `// NOTE:`  | Important note   |

---

## 🔐 Operators

| SPL Keyword | Equivalent | Description     |
| ----------- | ---------- | --------------- | --- | ---------- |
| `আর`        | `&&`       | Logical AND     |
| `নয়লে`     | `          |                 | `   | Logical OR |
| `না`        | `!`        | Logical NOT     |
| `অইছে`      | `===`      | Strict equality |
| `সমান`      | `==`       | Equality check  |

---

## 🛠️ Built-in Utilities

| SPL Keyword   | Equivalent      | Description            |
| ------------- | --------------- | ---------------------- |
| `আল্লার_ভরসা` | `Math.random()` | Generate random number |
| `লম্বা`       | `.length`       | Get length of value    |

---

## 🎉 Fun Keywords

| SPL Keyword   | Equivalent      | Description           |
| ------------- | --------------- | --------------------- |
| `ফাজলামি`     | `//`            | Sylheti style comment |
| `আল্লার_ভরসা` | `Math.random()` | Random magic 😄       |

---

## Quick Example

```sylheti
ধর নাম = "সিলেট"

যদি (নাম অইছে "সিলেট") {

    কও "আইলা রে বা!"

}
```

Output:

```text
আইলা রে বা!
```

---

## Summary

SPL keywords are designed to make programming:

- 🌿 More natural
- 😄 More enjoyable
- 🇧🇩 Culturally familiar
- 🚀 Beginner friendly

Learn the examples first, then use this keyword reference as a quick lookup guide.

---

# 8. 🎯 Complete Examples

This section contains complete example programs written in **Sylheti Programming Language (SPL)**.

These examples will help beginners understand how SPL keywords work together to create real programs.

---

## 🧮 8.1 Simple Calculator

A basic calculator that performs addition, subtraction, multiplication, and division.

```sylheti
ধর a = ২০
ধর b = ১০

কও "যোগ:"
কও a + b

কও "বিয়োগ:"
কও a - b

কও "গুণ:"
কও a * b

কও "ভাগ:"
কও a / b
```

### Output

```text
যোগ:
30

বিয়োগ:
10

গুণ:
200

ভাগ:
2
```

---

## 🔢 8.2 Odd or Even Number

Check whether a number is odd or even.

```sylheti
ধর সংখ্যা = ১০

যদি (সংখ্যা % ২ অইছে ০) {

    কও "ইডা জোড় সংখ্যা"

}

নাঅইলে {

    কও "ইডা বিজোড় সংখ্যা"

}
```

### Output

```text
ইডা জোড় সংখ্যা
```

---

## 🔍 8.3 Prime Number Checker

Check whether a number is prime.

```sylheti
ধর সংখ্যা = ৭
ধর prime = হাছা

ঘুর (ধর i = ২; i < সংখ্যা; i++) {

    যদি (সংখ্যা % i অইছে ০) {

        prime = মিছা

    }

}


যদি (prime) {

    কও "Prime Number"

}

নাঅইলে {

    কও "Not Prime"

}
```

### Output

```text
Prime Number
```

---

## ✖️ 8.4 Factorial Program

Calculate factorial of a number.

Example:

5! = 5 × 4 × 3 × 2 × 1

```sylheti
ধর সংখ্যা = ৫
ধর ফলাফল = ১

ঘুর (ধর i = ১; i <= সংখ্যা; i++) {

    ফলাফল = ফলাফল * i

}

কও ফলাফল
```

### Output

```text
120
```

---

## 🌀 8.5 Fibonacci Series

Generate Fibonacci numbers.

```sylheti
ধর a = ০
ধর b = ১

ঘুর (ধর i = ১; i <= ১০; i++) {

    কও a

    ধর পরের = a + b

    a = b

    b = পরের

}
```

### Output

```text
0
1
1
2
3
5
8
13
21
34
```

---

## 🎓 8.6 Student Result System

Calculate student grade based on marks.

```sylheti
ধর নম্বর = ৮৫


যদি (নম্বর >= ৮০) {

    কও "Grade: A"

}

নাঅইলে_যদি (নম্বর >= ৬০) {

    কও "Grade: B"

}

নাঅইলে {

    কও "Fail"

}
```

### Output

```text
Grade: A
```

---

## 🎲 8.7 Number Guessing Game

Generate a random number and compare with user's guess.

```sylheti
ধর আসল = ৫
ধর অনুমান = ৫


যদি (অনুমান অইছে আসল) {

    কও "সঠিক ধরছো!"

}

নাঅইলে {

    কও "ভুল হইছে!"

}
```

### Output

```text
সঠিক ধরছো!
```

---

## 🔄 8.8 Reverse a String

Reverse a text value.

```sylheti
ধর নাম = "SPL"
ধর উল্টা = ""

ঘুর (ধর i = নাম.লম্বা - ১; i >= ০; i--) {

    উল্টা = উল্টা + নাম[i]

}

কও উল্টা
```

### Output

```text
LPS
```

---

## 🧮 8.9 Multiplication Table

Generate multiplication table.

```sylheti
ধর সংখ্যা = ৫

ঘুর (ধর i = ১; i <= ১০; i++) {

    কও সংখ্যা * i

}
```

### Output

```text
5
10
15
20
25
30
35
40
45
50
```

---

## 🔐 8.10 Simple Password Checker

Check password validity.

```sylheti
ধর password = "12345"


যদি (password অইছে "12345") {

    কও "Login Successful"

}

নাঅইলে {

    কও "Wrong Password"

}
```

### Output

```text
Login Successful
```

---

# 🚀 What You Learned

From these examples, you learned how to use:

✅ Variables  
✅ Conditions  
✅ Loops  
✅ Functions  
✅ Operators  
✅ Random values  
✅ Problem solving logic

These examples show the power of writing programs using natural Sylheti syntax.

---

# 9. 😂 Funny Keywords

Programming does not always have to be serious!

**Sylheti Programming Language (SPL)** includes some fun and cultural keywords that make coding more enjoyable.

These keywords are reserved inside the language and represent common Sylheti expressions with programming meanings.

---

## 🌿 Reserved Funny Keywords

| SPL Keyword   | Equivalent       | Description                       |
| ------------- | ---------------- | --------------------------------- |
| `আল্লার_ভরসা` | `Math.random()`  | Leave the result to randomness 😄 |
| `ফাজলামি`     | `//`             | Write a funny comment             |
| `পরে_দেখুম`   | `// TODO:`       | A task for future you             |
| `এইডা_ঠিক_কর` | `// FIXME:`      | Something needs fixing            |
| `মনে_রাখ`     | `// NOTE:`       | Important reminder                |
| `ধুর_মিয়া`   | `process.exit()` | Exit the program dramatically 😂  |
| `মাথা_নষ্ট`   | `Error`          | Something went seriously wrong    |

---

## 🔹 9.1 `আল্লার_ভরসা`

Sometimes we need a random value and we trust the system!

Equivalent:

```javascript
Math.random();
```

Example:

```sylheti
ধর ভাগ্য = আল্লার_ভরসা()

কও ভাগ্য
```

Output:

```text
0.823491
```

---

## 🔹 9.2 `ফাজলামি`

Use this keyword to write comments.

Example:

```sylheti
ফাজলামি এই কোড এখনো সুন্দর করা লাগে

কও "Hello SPL"
```

Output:

```text
Hello SPL
```

---

## 🔹 9.3 `পরে_দেখুম`

When you have unfinished work, leave a note.

Example:

```sylheti
পরে_দেখুম Login system বানানো লাগবো

কও "Application Running"
```

Meaning:

```text
// TODO: Login system বানানো লাগবো
```

---

## 🔹 9.4 `এইডা_ঠিক_কর`

When something is broken, mark it.

Example:

```sylheti
এইডা_ঠিক_কর এই calculation আবার check করা লাগবো

কও ১০ + ২০
```

Meaning:

```text
// FIXME: এই calculation আবার check করা লাগবো
```

---

## 🔹 9.5 `মনে_রাখ`

Add important notes for yourself or your team.

Example:

```sylheti
মনে_রাখ এই variable user data রাখে

ধর user = "Monjur"
```

Meaning:

```text
// NOTE: এই variable user data রাখে
```

---

## 🔹 9.6 `ধুর_মিয়া`

A funny way to stop a program.

Example:

```sylheti
ধর error = হাছা

যদি (error) {

    ধুর_মিয়া

}
```

Meaning:

```javascript
process.exit();
```

---

## 🤣 Why Funny Keywords?

SPL was created to make programming:

- 🇧🇩 More culturally familiar
- 🌿 More natural for Sylheti speakers
- 😄 More enjoyable for beginners
- 🚀 Easier to remember

Because programming can be powerful **and** fun!

---

## Future Funny Keywords 🚀

Possible future additions:

| Keyword Idea     | Meaning          |
| ---------------- | ---------------- |
| `গেলাম_রে`       | Program finished |
| `চা_খাইয়া_আসি`  | Pause execution  |
| `মাথা_গরম`       | Critical error   |
| `আবার_চেষ্টা_কর` | Retry operation  |
| `জোরে_চালাও`     | Debug mode       |

---

> আইলা রে বা! এখন কোডও হইবো সিলেটি স্টাইলে! 🌾

---

# 10. ⚙️ Compiler Architecture

Sylheti Programming Language (SPL) works as a **transpiler**.

It converts `.sylheti` source code written in Sylheti syntax into executable JavaScript code, then runs it using the Node.js runtime.

The complete compilation flow:

```text
        .sylheti Source Code
              │
              ▼
        ┌────────────┐
        │   Lexer    │
        └────────────┘
              │
              ▼
        ┌──────────────┐
        │ Transformer  │
        └──────────────┘
              │
              ▼
        JavaScript Code
              │
              ▼
        ┌──────────────┐
        │ Node.js      │
        │ Runtime      │
        └──────────────┘
              │
              ▼
          Program Output
```

---

# 🔹 Compilation Steps

## 1. 📝 SPL Source Code (`.sylheti`)

Users write programs using Sylheti keywords.

Example:

```sylheti
ধর নাম = "মনজুর"

কও নাম
```

---

## 2. 🔍 Lexer

The Lexer reads the source code and breaks it into smaller pieces called **tokens**.

Responsibilities:

- Read source code line by line
- Identify keywords
- Separate operators and values
- Prepare code for transformation

Example:

Input:

```sylheti
কও "Hello"
```

Tokens:

```text
TOKEN → কও
TOKEN → "Hello"
```

---

## 3. 🔄 Transformer

The Transformer converts SPL keywords into JavaScript syntax.

Example:

SPL:

```sylheti
কও "Hello"
```

Converted JavaScript:

```javascript
console.log("Hello");
```

Keyword mapping is handled by:

```
src/
 └── keywords.js
```

Example:

```javascript
{
    regex: /কও/g,
    replacement: 'console.log'
}
```

---

## 4. ⚡ JavaScript Generation

After transformation, SPL creates valid JavaScript code.

Example:

SPL:

```sylheti
ধর বয়স = ২০
```

Generated JavaScript:

```javascript
let বয়স = 20;
```

---

## 5. 🚀 Node.js Runtime

The final JavaScript code is executed using Node.js.

Execution process:

```
JavaScript
     │
     ▼
Node.js Engine
     │
     ▼
Program Result
```

---

# 🏗️ Internal Project Structure

The compiler architecture is organized like this:

```
sylheti-programming-language/

├── bin/
│   └── spl.js
│
├── src/
│   │
│   ├── lexer/
│   │   └── lexer.js
│   │
│   ├── transformer/
│   │   └── transformer.js
│   │
│   ├── keywords.js
│   │
│   └── index.js
│
└── README.md
```

---

# 🔧 Main Components

| Component   | File                             | Responsibility                 |
| ----------- | -------------------------------- | ------------------------------ |
| CLI Entry   | `bin/spl.js`                     | Run SPL programs from terminal |
| Lexer       | `src/lexer/lexer.js`             | Tokenize source code           |
| Keywords    | `src/keywords.js`                | Store SPL → JS mappings        |
| Transformer | `src/transformer/transformer.js` | Convert SPL into JavaScript    |
| Runner      | `src/index.js`                   | Execute compiled code          |

---

# 🌿 Example Full Pipeline

Input:

```sylheti
চিল্লাইয়া_কও "আসসালামু আলাইকুম!"
```

↓

Lexer:

```text
চিল্লাইয়া_কও
"আসসালামু আলাইকুম!"
```

↓

Transformer:

```javascript
console.log("আসসালামু আলাইকুম!");
```

↓

Node.js Execution:

```text
আসসালামু আলাইকুম!
```

---

# 🚀 Future Compiler Improvements

Future versions of SPL may include:

- Advanced Parser
- Abstract Syntax Tree (AST)
- Better Error Messages
- Type Checking
- Direct Bytecode Generation
- SPL Standard Library

---

SPL follows a simple but powerful idea:

> Write code in Sylheti 🌿 → Transform into JavaScript ⚡ → Run anywhere with Node.js 🚀

---

# 11. 📂 Project Structure

The Sylheti Programming Language (SPL) project follows a simple and modular structure.

Each part of the compiler has a specific responsibility, making the code easier to understand, maintain, and extend.

```
sylheti-programming-language/

│
├── bin/
│   └── spl.js
│
├── src/
│   │
│   ├── lexer/
│   │   └── lexer.js
│   │
│   ├── transformer/
│   │   └── transformer.js
│   │
│   ├── keywords.js
│   │
│   └── index.js
│
├── examples/
│   └── hello.sylheti
│
├── package.json
│
└── README.md
```

---

# 📁 Folder & File Explanation

## 🚀 `bin/`

The `bin` folder contains the command-line interface (CLI) entry point.

```
bin/
└── spl.js
```

### `spl.js`

Responsible for:

- Reading `.sylheti` files
- Starting the SPL compiler
- Running SPL programs from the terminal

Example:

```bash
spl hello.sylheti
```

---

# 🔍 `src/`

The `src` folder contains the main compiler logic.

```
src/
```

It contains:

- Lexer
- Transformer
- Keyword mapping
- Runtime execution logic

---

# 🔤 `src/lexer/`

The lexer converts source code into smaller parts called tokens.

```
src/
└── lexer/
    └── lexer.js
```

### `lexer.js`

Responsibilities:

- Read SPL source code
- Detect words and symbols
- Identify comments
- Generate tokens

Example:

Input:

```sylheti
কও "Hello"
```

Token output:

```text
TOKEN → কও
TOKEN → "Hello"
```

---

# 🔄 `src/transformer/`

The transformer converts SPL syntax into JavaScript.

```
src/
└── transformer/
    └── transformer.js
```

### `transformer.js`

Responsibilities:

- Replace SPL keywords
- Convert Bengali numbers
- Generate JavaScript code
- Execute final output

Example:

SPL:

```sylheti
কও "Hello"
```

Converted JavaScript:

```javascript
console.log("Hello");
```

---

# 📚 `src/keywords.js`

This file contains the complete SPL keyword dictionary.

```
src/
└── keywords.js
```

Example:

```javascript
{
    regex: /কও/g,
    replacement: 'console.log'
}
```

It defines:

- Variables
- Conditions
- Loops
- Functions
- OOP keywords
- Error handling
- Funny keywords

---

# ▶️ `src/index.js`

The main compiler controller.

```
src/
└── index.js
```

Responsibilities:

- Connect lexer and transformer
- Start compilation process
- Provide the main `run()` function

Flow:

```
SPL Code
    │
    ▼
index.js
    │
    ▼
Transformer
    │
    ▼
JavaScript Execution
```

---

# 📦 `examples/`

Contains sample SPL programs.

Example:

```
examples/

├── hello.sylheti
├── calculator.sylheti
└── fibonacci.sylheti
```

Used for:

- Learning SPL syntax
- Testing compiler features
- Demonstrating examples

---

# 📄 `package.json`

Contains project information and Node.js configuration.

It defines:

- Package name
- Version
- CLI command
- Entry point
- Dependencies

Example:

```json
{
  "name": "sylheti-programming-language",
  "bin": {
    "spl": "./bin/spl.js"
  }
}
```

---

# 📝 `README.md`

Documentation file for SPL.

Contains:

- Installation guide
- Language tutorials
- Keyword reference
- Examples
- Architecture explanation

---

# 🔧 Development Flow

When a user runs:

```bash
spl hello.sylheti
```

The process is:

```
hello.sylheti

        │

        ▼

bin/spl.js

        │

        ▼

src/index.js

        │

        ▼

transformer.js

        │

        ▼

JavaScript

        │

        ▼

Node.js Runtime

        │

        ▼

Output
```

---

# 🌱 Why This Structure?

This modular structure makes SPL:

- Easy to understand
- Easy to improve
- Easy to contribute to
- Ready for future compiler features

Future versions may add:

```
src/

├── parser/
├── ast/
├── optimizer/
└── runtime/
```

to create a more advanced compiler architecture.

---

# 12. 🗺️ Roadmap

The journey of **Sylheti Programming Language (SPL)** is just beginning.

Our goal is to build a fun, beginner-friendly, and culturally inspired programming language with modern compiler features.

---

# ✅ Version 1.0.0 — Completed

Current SPL version includes:

- ✅ Sylheti keyword syntax
- ✅ JavaScript transpilation
- ✅ Node.js runtime execution
- ✅ CLI support
- ✅ Variables
- ✅ Constants
- ✅ Data Types
- ✅ Input & Output
- ✅ Operators
- ✅ Conditional Statements
- ✅ Loops
- ✅ Functions
- ✅ Error Handling
- ✅ Comments
- ✅ Built-in Utilities
- ✅ Funny Sylheti Keywords

---

# 🚀 Version 1.1.0 — Next Release

## Language Improvements

Planned features:

- ⬜ Arrays
- ⬜ Objects
- ⬜ Better Function Support
- ⬜ Improved Loop System
- ⬜ More Built-in Utilities

Example future syntax:

```sylheti
ধর ফল = ["আম", "লিচু", "কাঁঠাল"]

কও ফল
```

---

# ⚡ Version 1.2.0 — Developer Features

Making SPL more powerful for real projects.

Planned:

- ⬜ Modules
- ⬜ Import / Export System
- ⬜ Package Manager
- ⬜ Standard Library
- ⬜ External Library Support

Future example:

```sylheti
আনো math

কও math.যোগ(১০,২০)
```

---

# 🧠 Version 2.0.0 — Advanced Compiler

Building a more powerful compiler architecture.

Planned:

- ⬜ Better Parser
- ⬜ Abstract Syntax Tree (AST)
- ⬜ Improved Lexer
- ⬜ Syntax Validation
- ⬜ Better Error Messages
- ⬜ Debug Mode
- ⬜ Code Optimization

Future architecture:

```
Source Code
     │
     ▼
Lexer
     │
     ▼
Parser
     │
     ▼
AST
     │
     ▼
Compiler
     │
     ▼
Runtime
```

---

# 🌿 Long-Term Vision

Future goals for SPL:

- 🌍 Make programming accessible in local languages
- 🇧🇩 Promote Sylheti language in technology
- 🎓 Help beginners learn programming easily
- 🛠️ Build a complete Sylheti developer ecosystem

---

# 🤝 Want to Contribute?

You can help SPL grow by:

- Adding new Sylheti keywords
- Improving compiler logic
- Creating examples
- Reporting bugs
- Suggesting new features

Every contribution helps make SPL better.

---

> আইলা রে বা! ছোট্ট SPL একদিন বড় ভাষা অইবো! 🌿🚀

---

# 13. 🤝 Contributing

Contributions are welcome! 🎉

Sylheti Programming Language (SPL) is an open-source project, and everyone is invited to help improve the language.

Whether you are a beginner or an experienced developer, you can contribute by:

- 🌿 Adding new Sylheti keywords
- 🐛 Fixing bugs
- ⚡ Improving compiler performance
- 📚 Creating documentation
- 📝 Adding example programs
- 💡 Suggesting new language features
- 🧪 Writing test cases

---

## 🚀 How to Contribute

### 1. Fork the Repository

Create your own copy of the SPL repository.

---

### 2. Clone Your Fork

```bash
git clone https://github.com/monjurmbm404/sylheti-programming-language.git
```

---

### 3. Create a New Branch

```bash
git checkout -b feature/new-keyword
```

Example:

```bash
git checkout -b feature/add-array-support
```

---

### 4. Make Your Changes

Improve the code, documentation, or examples.

Project structure:

```
src/
├── lexer/
├── transformer/
├── keywords.js
└── index.js
```

---

### 5. Test Your Changes

Run SPL examples:

```bash
spl examples/hello.sylheti
```

Make sure existing features still work correctly.

---

### 6. Submit a Pull Request

Push your changes and create a Pull Request.

Please describe:

- What you changed
- Why you changed it
- How it improves SPL

---

## 💡 Contribution Ideas

New contributors can start with:

- Adding funny Sylheti keywords 😂
- Improving error messages
- Creating beginner examples
- Adding documentation
- Translating documentation

---

## 🌱 Code of Conduct

Please keep contributions:

- Respectful
- Helpful
- Educational
- Friendly

Let's build a programming language community together.

---

# 14. 📜 License

Sylheti Programming Language (SPL) is released under the **MIT License**.

This means you are free to:

- ✅ Use the project
- ✅ Modify the source code
- ✅ Share improvements
- ✅ Use it for personal or commercial projects

with proper attribution.

---

## MIT License

```
MIT License

Copyright (c) 2026 Md Monjur Bakth Mazumder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

The software is provided "AS IS", without warranty of any kind.
```

---

## ❤️ Final Message

Thank you for supporting **Sylheti Programming Language (SPL)**.

From Sylhet 🌿 to the world 🌍,

let's make programming more natural, enjoyable, and accessible.

> আইলা রে বা! এখন কোড করুম সিলেটি ভাষায়! 🚀

---

# 15. 👨‍💻 Author

## Engr. Md Monjur Bakth Mazumder

### ইঞ্জিনিয়ার মো. মনজুর বক্ত মজুমদার

Creator of **Sylheti Programming Language (SPL)** 🌿

SPL is a personal open-source project created to explore programming language design, compiler concepts, and the possibilities of using native language in technology.

---

## 🎓 Education

🎓 **Diploma in Computer Science and Technology**  
[Moulvibazar Polytechnic Institute](https://mpi.moulvibazar.gov.bd/)

🎓 **BSc in Computer Science & Engineering (CSE) — Ongoing**  
[Sylhet International University](https://siu.edu.bd/)

---

## 💻 Programming Profiles

### 👨‍💻 Coding & Development

- 🐙 GitHub:  
  https://github.com/monjurmbm404

- ⚔️ Codeforces:  
  https://codeforces.com/profile/monjurmbm404

- 🍴 CodeChef:  
  https://www.codechef.com/users/monjurmbm404

- 🧩 LeetCode:  
  https://leetcode.com/u/monjurmbm404/

- ⚡ VJudge:  
  https://vjudge.net/user/monjurmbm404

---

## 🌐 Social & Community

- 💼 LinkedIn:  
  https://www.linkedin.com/in/monjurmbm404/

- 📘 Facebook:  
  https://www.facebook.com/monjurmbm404

- ▶️ YouTube:  
  https://youtube.com/@monjurmbm404

- ✍️ Medium:  
  https://medium.com/@monjurmbm404

- 𝕏 X (Twitter):  
  https://x.com/monjurmbm404

---

## 📧 Contact

Email:

📩 monjurmbm404@gmail.com

---

## 🌿 About the Creator

Interested in:

- Programming Language Design
- Compiler Development
- Competitive Programming
- Web Development
- Artificial Intelligence & Machine Learning

The goal behind SPL is to make programming more natural, enjoyable, and accessible by combining technology with the beauty of the Sylheti language.

---

## ⭐ Support This Project

If you find **Sylheti Programming Language (SPL)** interesting:

- ⭐ Star the repository
- 🐛 Report issues
- 💡 Suggest new features
- 🤝 Contribute to the project

Your support helps SPL grow! 🚀

---

> আইলা রে বা! এখন কোড করুম সিলেটি ভাষায়! 🌿🚀
