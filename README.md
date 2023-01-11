# website

# Dependencies
react-create-app;
react-router-dom;
react-icons;
react-paypal-js;


# React Notes
- React Hooks need be within a function component.
- React Hooks need to be run in order. Cannot be in if-else statements.
i.e [currentState, updatedState] =useState(4)
- React Hooks always returns an array with two values.

- Props cannot be changed in function.
- Props are passed into component vs State is managed within the component.

# Mongo DB
Connection string: 
mongodb+srv://jung2shinho:<password>@cluster0.z3fcwkj.mongodb.net/?retryWrites=true&w=majority

1. Created backend folder
2. cd backend 
3. npm init -y // creates package.json
4. npm install express cors mongoose dotenv // cors = cross origin resource sharing which allows ajax to skip policy and access from remote hosts. Mongoose allows interaction between nodeJS and MongoDB simpiler. dotenv loads environment variables from a dotEMB file

