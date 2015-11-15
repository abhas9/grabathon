# Grabathon
Solution for programming challenge by Grabhouse implemented in nodejs.

# Usage
+ npm install
+ node index.js

# Problem
Nowadays, buying a good enough house has become a very difficult task for the people. There are many factors that comes into the mind of the persons who are looking for a good and acceptable house. These factors can be like money, time, locality etc. So considering this situation, Grabhouse has decided to help the persons in getting their dream houses or flats. It has started a scheme called “GrabIt” which gives a chance to buy a house as soon as possible.. According to the scheme , if you want to buy an ith house then it will take T unit of time and once you have purchased it then it will no longer be the neighbor of any other houses remaining which means for (i-1)th house (i+1)th house will be the new neighbor and vice versa. You can only buy the house if it has both the neighbors so it is not possible to buy the first and the last house. But you are the first person who only knows about the scheme so you want to buy all the possible houses as fast as possible.

Below are the details of the “GrabIt” scheme:
```T = Left*Current + Right*Current – Left*Right```
Here,
```
T: time required to buy the ith house.
Left: cost of the left neighboring house.
Right: cost of the right neighboring house.
Current: cost of the current house.
```

## Input
First line of the input will contain a T (number of test cases).
Then each test case consist of two lines, First line will have a N (number of values in the initial array ) and the second line will contain n space separated integers (cost of the houses)

## Output
For each test case, output the minimum time required to buy all of the possible houses that can be purchased.

## Constraints
1 ≤ T ≤ 100
0 ≤ N ≤ 50
0 ≤ A[i] ≤ 106

### Sample Input:
```
2
3
1 2 3
4
1 2 3 4
```
