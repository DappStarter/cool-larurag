require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food ship rice still equip grunt light army gate'; 
let testAccounts = [
"0x07c72529f08f082a75410350b1defc7183ccf564e2ddd6d6bd1cccd813c4f1b7",
"0x1f9b2b818d84823618a67ca9faf11211135dbbceb4a1ed9992d561054c5819bd",
"0x69fa10fd97c54a47a0ffbfa7e4e3e9fe28060d72602ab43d6618420b78e29864",
"0xf58806bcd9a1e6212bde88556c035610fc91d53bc7b94235e0e16e43505c744e",
"0x9b1ad174871849983bea80a86970e60e6197e40a19bdf8c81e33435ca9a43099",
"0x1d66d241d9a957a0627b57c192bec24bb2883b1b12a71123f13dceba446ed8bd",
"0x8b4fab19876782010bd653d3e34102db8036eefa930fec2e311d29785a5421a3",
"0xb92c8b09fdddee4eee99a433fe9632bb8c407bd8a620f7d176a87a112c84eb2c",
"0x5563a5be323b99030239e72ced8d482fff43ad95fc65abe34978542b6dba853b",
"0x12ca68bfcbb214451eb5a477b9fc564fbac3032b84c33918f5e442153e85693b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
