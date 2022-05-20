## Installing and Storefront Setup

Clone the repo, replace `REACT_APP_STORE_OWNER_ADDRESS_ADDRESS` in the .env file with your solana address and run

```bash
$ git clone https://github.com/metaplex-foundation/metaplex.git
$ cd metaplex/js
$ yarn install && yarn bootstrap && yarn build
$ yarn start
```

Navigate to `http://localhost:3000/#/?network=devnet` to explore the deployed application.

## Deploying the Storefront on Vercel

To publish the Helios app to Vercel, you first need to visit https://vercel.com/ and create a new project (after forking this repo) linked to your github repo.

After that, configure this project with the following settings:

Framework: `Next.js`
<br />
Root directory: `js`
<br />
Output directory: `packages/web/.next`
<br />

One last thing: specify REACT_APP_STORE_OWNER_ADDRESS_ADDRESS in the Environment Variables section

![Vercel Deployment Config](https://docs.metaplex.com/assets/images/vercel-configuration-62168cb66c5c5f4493e956af0116a637.png)


