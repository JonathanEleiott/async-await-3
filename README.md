# Async / Await

## Asynchronous Programming (Async)

- starts a potentially long running task (unknown time limit)
  - going and getting data from somewhere
  - reading a text file on your computer

## Event Loop (how does our code run)

- runs code from top to bottom
- if it hits and async call
  - trigger the call
  - continue to run other code
- when async call finishes, it will add the async information to the Callback Queue
- once there is no other code to run, it'll start running the code from the Callback Queue

## API (Application Programming Interface)

- allows our Front-End code to interact with code outside of our Front-End (servers)
- CRUD (Create, Read, Update, Delete)
  - The basic function of MOST servers and websites
- HTTP Methods
  - GET - retrieve data (READ)
  - POST - add new data (CREATE)
  - PUT - update data (UPDATE)
  - DELETE - removing data (DELETE)
- Base URL
  - the START of the URL that is required to call the server that you want information from
  - WHERE I want to call
- Endpoint
  - the part of the URL that comes after the Base URL that will tell the server which information you need
  - WHAT information I want

## How to make Asynchronous calls to API's

- 2 ways to handle an asynchronous call
  - callback functions (OLD WAY)
    - callback hell
    - pyramid of doom
  - Promise - cleaner
    - object that has a status and a value
      - pending - has not finished yet
      - fulfilled - call succeeded
      - rejected - error
    - async / await
      - await waits for the async call to finish before moving on
      - await can only be used inside of async functions
      - use .json() to turn the Response into data
  - fetch - async call that is used to call an outside source