
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-waffle");


const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Vte9hvzFwtBfNVPl9s7v7camK4wa2lpe",
      accounts: ["c40164836a3fd67e6c0eedded637bcc70754e143fcc101e308d9df97aa9ce405"],
    },
  },
};