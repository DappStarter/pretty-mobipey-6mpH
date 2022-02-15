require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name repeat rural essay idea cloth equal gasp'; 
let testAccounts = [
"0xbe6f95c21b4c029cab2729487f361688642a24a9cd8402a1838b45940a7b4690",
"0xdf58ca31a8fe7ef7cca3a8b1294533694983c4c3ee5704321ff78eb1d2aa1473",
"0xeace443e7dac821fe0e4fbfa65203ba012861b8f782511a0693f9503ebe16a60",
"0x97f0da11721c313d99f3011cc76bc4abf712b883ff53ff3fd61bbaa6995a1a7a",
"0x1ebbfb5012776c4ea82f5c62f9c7dac7d5671cf82c5ba6534fc01ea0293c7737",
"0xd140b2f614704138031408326c32620d656fbeb101ec7888d5abb4bdbd9ba8c1",
"0xa5e49b0e036a2d45dd39d348d80d7552d813de28c8e25f722aee6f32b196e459",
"0x02aa3f4e0aa0d170bb7442f09e7051d6b71397924ef061512b6dc23c05d60292",
"0xe84ef9d1b746f3cb755cb66e4d8b1f08399fe1d396f2c8fde8e32a5a0572b456",
"0xdfc1b08961c6bbe59f29517255360834bd5dffd20064ce53682b2baaf57492dd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


