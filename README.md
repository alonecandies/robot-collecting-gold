Question:
   Given an 2D world A[m][n]. Each cell (i, j) holds a particular value of gold A[i][j].
   A dummy robot is sent to this world to collect the gold. The robot is originally at the
   cell (X, Y) and it’s taking a list of commands, each command is 1 of the 4 values:
   U: move up
   D: move down
   L: move left
   R: move right
   Robot will collect all the gold at every cell it passes through, including the original
   position. However, if the robot moves out of the 2D worlds, it blows up! The robot
   can only collect 1 time from each cell too.
   Input will be given in a file input.txt
   1st line includes 2 numbers M, N .i.e size of the 2D world
   For the next M lines, line i-th contains N numbers - gold value of cells in row A[i].
   Next line consists of X, Y
   Final line is a string of commands.
   Output a single number in output.txt , the total of gold the robot has collected after
   taking all the commands. If the robot moves out of the 2D world at any time, return 0
   instead.
Constraint:
   M, N ≤ 1000
   0 ≤ X < M, 0 ≤ Y < N
   Commands ≤ 10^6
   The world is 0-indexed
------------------------------------------------------------------------------------------------
Requirements:
   - Node v16.13.2
Instruction to run my solution:
   - Open terminal and run `git clone https://github.com/alonecandies/robot-collecting-gold.git`
   - Run `cd robot-collecting-gold`
   - Edit file input.txt as your demand
   - Run `node main.js`
   - Navigate file output.txt and see the result of my solution.
Note:
   - If there are any errors, it will appear in file output.txt(including reading input error)
   - Command can be blank but must have a line for this blankness
------------------------------------------------------------------------------------------------
Thank you!!