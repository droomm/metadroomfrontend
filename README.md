## Getting Started for local test

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy 

for Deployment, i use on [Vercel](https://vercel.com)

The deployment is actually simple.

1. you create ac account on [Vercel](https://vercel.com)(recommended to use github account to create the account).
2. once you have an account you press the button named "+ new project" and then it will redirect to page that let you import your git repo for deployment. click the import button on the git repo.
   * if the repo is under a team in git hub it will require you to create a team which is 20 dollar per month with a 14 day trail period.
   * if the repo is under personal git hub account the deployment will be free.
3. once you have setup the team it ask you to configure the project.
   * here by default the it will get the git repo name and it will detect the frame work to next.JS on the "FRAMEWORK PRESET" input if it doesn't change it to next.js.
   * Lastly there is deploy button there press it and it is done. it will start to deploy the project will take some time. but once done the site will be live and you get a notification about it.
  
To setup the domain once the deployment is done the project is set. go to the settings tab and at the second option there is Domains tab in which you can add yours.
