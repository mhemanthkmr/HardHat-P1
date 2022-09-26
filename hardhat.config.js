require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = "I4T6d63Vvgsp7Sx2UkslxxrKh9BDh2M3";
const GOERLI_PRIVATE_KEY =
  "f8df7ad55502d7d1a7bd17a62142427c64fa95af5edf208791436cbff6584570";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
