const express = require("express");
const app = express();

const fs = require("fs");
// Define a list of banks with their details
const banks = [
  {
    id: 1,
    name: "Bank of America",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    branches: [
      {
        id: 1,
        name: "Midtown Branch",
        address: "456 5th Avenue",
        city: "New York",
        state: "NY",
        zip: "10018",
      },
      {
        id: 2,
        name: "Downtown Branch",
        address: "789 Broadway",
        city: "New York",
        state: "NY",
        zip: "10003",
      },
    ],
  },
  {
    id: 2,
    name: "Chase Bank",
    address: "456 Park Avenue",
    city: "New York",
    state: "NY",
    zip: "10022",
    branches: [
      {
        id: 1,
        name: "Midtown East Branch",
        address: "789 Lexington Avenue",
        city: "New York",
        state: "NY",
        zip: "10022",
      },
      {
        id: 2,
        name: "Downtown Branch",
        address: "123 Broadway",
        city: "New York",
        state: "NY",
        zip: "10007",
      },
    ],
  },
  {
    id: 3,
    name: "Wells Fargo",
    address: "321 Elm Street",
    city: "Los Angeles",
    state: "CA",
    zip: "90012",
    branches: [
      {
        id: 1,
        name: "Downtown Branch",
        address: "456 Main Street",
        city: "Los Angeles",
        state: "CA",
        zip: "90012",
      },
      {
        id: 2,
        name: "Hollywood Branch",
        address: "789 Sunset Boulevard",
        city: "Los Angeles",
        state: "CA",
        zip: "90028",
      },
      {
        id: 3,
        name: "Beverly Hills Branch",
        address: "123 Rodeo Drive",
        city: "Beverly Hills",
        state: "CA",
        zip: "90210",
      },
    ],
  }
  
];

// Define a route to retrieve the list of banks and their details
app.get("/", (req, res) => {
  res.send(banks);
});

// Define a route to retrieve the details for a specific branch of a specific bank
app.get("/:bankId/branches/:branchId", (req, res) => {
  const bankId = parseInt(req.params.bankId);
  const branchId = parseInt(req.params.branchId);

  // Find the bank with the specified ID
  const bank = banks.find((bank) => bank.id === bankId);

  // If the bank was not found, return a 404 error
  if (!bank) {
    return res.status(404).send(`<strong>Bank Not Found</strong>`);
  }

  // Find the branch with the specified ID in the bank's branches
  const branch = bank.branches.find((branch) => branch.id === branchId);

  // If the branch was not found, return a 404 error
  if (!branch) {
    return res.status(404).send(`<strong>Branch Not Found</strong>`);
  }

  // Return the branch details
  res.send(branch);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
