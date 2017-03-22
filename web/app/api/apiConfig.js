export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    BASE_OL: "https://api.blocktrades.us/ol/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets"
};

export const settingsAPIs = {
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {url: "wss://fake.automatic-selection.com", location: "Choose closest automatically"},
        {url: "ws://127.0.0.1:8090", location: "Locally hosted"},
        {url: "wss://testnet.rudex.org/ws", location: "RuDEX Testnet Server (Germany)"}
    ],
    DEFAULT_FAUCET: "https://faucet.testnet.bitshares.eu",
    RPC_URL: "https://openledger.info/api/"
};
