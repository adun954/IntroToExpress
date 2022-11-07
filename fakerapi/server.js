const {faker} = require('@fake-js/faker')

const express = require("express");
const app = express();
const port = 8000;


// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
const newUserInfo = () => {
    const newUser = {
      id: faker.datatype.uuid(),
      firstName: faker.internet.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      lastName: faker.internet.lastName(),
      
    };
    return newUser;
};
    
const oneUser = newUserInfo();
console.log(oneUser);


const newCompanyInfo = () => {
  const newCompany = {
    id: faker.datatype.uuid(),
    companyName: faker.company.companyName(),
    address: {
      StreetAddress: faker.address.streetAddress(),
      City: faker.address.city(),
      StateAbbr: faker.address.stateAbbr(),
      Xipcode: faker.address.zipCode(),
      Country: faker.address.country(), 
    }
  };
  return newCompany;
};
  
const oneCompany = newCompany();
console.log(oneCompany);

// getting api from the app

app.length('/api/users/new', (req, res) => {
    res.json ( new newUserInfo());
})

app.length('/api/companies/new', (req, res) => {
  res.json ( new newCompanyInfo());
})

// Be sure to put {} to put two obj together
app.length('/api/user/company', (req, res) => {
  res.json ({newUserInfo: new newUserInfo(), newCompanyInfo: new newCompanyInfo()});
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );