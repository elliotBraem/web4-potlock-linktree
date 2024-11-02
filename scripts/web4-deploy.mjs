

const { transaction: { hash } } = await account.functionCall(accountId, 'web4_setStaticUrl', { url });
console.log('Updated in transaction:', `${config.explorerUrl}/transactions/${hash}`);

const websiteUrl = accountId.match(/\.(near|testnet)$/) &&  `https://${accountId.replace(/^web4./, '')}.page`;
if (websiteUrl) {
    console.log('\nVisit your website at:', websiteUrl);
} else {
    console.log('\nYou\'ll need to run your own Web4 gateway to access', accountId);
    // TODO: Command-line to run gateway
}

//  { "url": "ipfs://bafybeievbha3cbdq2fom5yizuy7pvkwg7q2my4hzbncibewqno67nzaihm"}

// near contract call-function as-transaction web4.potlock.near web4_setStaticUrl json-args '{ "url": "ipfs://bafybeievbha3cbdq2fom5yizuy7pvkwg7q2my4hzbncibewqno67nzaihm"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' sign-as web4.potlock.near network-config mainnet sign-with-legacy-keychain send