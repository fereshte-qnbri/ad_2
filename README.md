here you have a products array.you should implement CRUD routes using express and it's folder structure.

### Routes

Routes you should create:

- /product => GET
- /product/:id => GET
- /product => POST
- /product/:id => PATCH
- /product/:id => DELETE

You can use below array to send reponses or store data

```js
let products = [
  { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
  { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
  { id: 3, name: "Sony PlayStation 5", price: 499.99 },
  { id: 4, name: "MacBook Pro 16", price: 2399.99 },
  { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
];
```

You should create these folders to organize your application

- controllers
- routes
- middleware

---

### middlewares

1. add the built in middlewares to your app like express.json() and express.urlencoded()

2. add the cors middleware to your application

3. Create a middleware that logs the exact time when a request is received by your application.

   hint: Use new Date() to capture the current time.

---

### .env

store the PORT number in a .env file and pass it to app.listen using dotenv package
