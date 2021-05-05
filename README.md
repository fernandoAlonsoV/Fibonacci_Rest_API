# Fibonacci_Rest_API
Scenario: There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.


#### Technical decisions that I made:
- To solve this problem, I first chosed the technology i thought would be faster to develop this mini-challege.
- I chosed NodeJs with NextJS
- I used PostMan to check the POST request to my App and the responses 

#### What optimizations I could add in the future to improve upon my initial solution:
- I think i could add components such as forms, inputs, etc. To make it easier tester it the solution. 
- I think i could implement some test cases to know where's brocken the app and develop faster
- I think i could show the result using Async/Await functions in the client side
- I think i could create an SPA to make it visualizing attractive
- I think i could show some error messages  in case the user provide some bad requests

#### Other considerations :
##### Run the mini-app
Once you have clone this repository:
- You should install all the dependencies from the package.json
- You should open the repository with your code editor and run in the terminal the next code: 
`npm run dev`
this will call nodemon and execute the app, and it update it each time you send it data with each POST call throught Postman
