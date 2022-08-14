require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */

// Contract Address :0x51eAc5BC56F41eFbbA21F044dB26F7Fcd555387e

const ALCHEMY_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.4",
  networks :{
    mumbai : {
      url : ALCHEMY_KEY_URL,
      accounts : [MUMBAI_PRIVATE_KEY],
    },
  },
};
