<!-- markdownlint-disable MD014 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<!-- markdownlint-disable MD029 -->

<div align="center">

<h1 style="font-size: 2.5rem; font-weight: bold;">Potlock Donations</h1>

  <p>
    <strong>Donate and get donations through <a target="_blank" href="https://potlock.xyz/">Potlock</a></strong>
  </p>

</div>

<details>
  <summary>Table of Contents</summary>

- [Getting Started](#getting-started)
  - [Installing dependencies](#installing-dependencies)
  - [Running the app](#running-the-app)
  - [Building for production](#building-for-production)
  - [Running tests](#running-tests)
- [Contributing](#contributing)

</details>

## Getting Started

### Installing dependencies

```bash
pnpm install
```

### Running the app

First, run the development server:

```bash
pnpm run dev
```

### Building for production

```bash
pnpm run build
```

### Running tests

```bash
pnpm run test
```

See the full [testing guide](./playwright-tests/README.md).

## Deploy to web4

1. Build the project

```cmd
pnpm run build
```

2. Create a web4 subaccount of your master account (this will be your domain).

```cmd
near account create-account fund-myself web4.MASTER_ACCOUNT.testnet '1 NEAR' autogenerate-new-keypair save-to-keychain sign-as MASTER_ACCOUNT.testnet network-config testnet sign-with-keychain send
```

Be sure to "Store the access key in legacy keychain"!

3. Run web4-deploy to upload production bundle to nearfs and deploy it to a minimum-web4 contract to your account.

```cmd
npx github:vgrichina/web4-deploy dist web4.MASTER_ACCOUNT.testnet --deploy-contract --nearfs
```

Deploy should be accessible and your website accessible at 

`testnet`: MASTER_ACCOUNT.testnet.page

`mainnet`: MASTER_ACCOUNT.near.page

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you're interested in contributing to this project, please read the [contribution guide](./CONTRIBUTING).

<div align="right">
<a href="https://nearbuilders.org" target="_blank">
<img
  src="https://builders.mypinata.cloud/ipfs/QmWt1Nm47rypXFEamgeuadkvZendaUvAkcgJ3vtYf1rBFj"
  alt="Near Builders"
  height="40"
/>
</a>
</div>
