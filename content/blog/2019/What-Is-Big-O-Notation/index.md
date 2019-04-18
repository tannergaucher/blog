---
title: What is Big O Notation?
date: "2019-04-17"
description: ""
tags: ["Notes", "Algorithms"]
---

My notes on [Article Title]('') By [Beau Carnes]('')

**Takeaway**

> Big O notation is used to communicate how fast an algorithm is. Not measured in seconds, but in how quickly
> the run time increases as the size of _n_ increases. Run times don't grow at the same rate. A log time algorithm is faster than a linear time algorithm at searching a small _n_ of items, but log
> time is a _lot_ faster than linear at searching a very large _n_ of items.

### Algorithm running times grow at different rates

- Run times don't grow at the same rate
  - As number of items increases
    - Faster notation takes a _little_ more time
    - Slower notation can take a _lot_ more time
  - Important to know how running time increases as list size increases
- Big O tells how fast an algorithm is
  - Supposing a list of size _n_
  - Simple search will take _n_ operations
  - This is expressed in Big O as O(n)
- Big O doesn't express time in seconds
  - Instead it lets you compare the number of operations
  - It tells you how fast the algorithm grows as _n_ increases

### Worst case run time

- An O(n) search for a user in a database means that in the worst case, a search will have to look through every user
  - It _might_ find the person on the first run, but the worst case is still O(n)

### 5 Common Big O run times

- O(log _n_)
  - _Log time_
  - Ex binary search
- O(_n_)
  - _Linear time_
  - Simple Search
- O(_n_ \* log _n_)
  - Ex fast sorting algorithm, like quicksort
- O(_n_ 2)
  - Ex slow sorting algorithm, like selection sort
- O(_n_ !)
  - EX very slow algorithm
