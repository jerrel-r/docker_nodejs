# Software

| **Lightbulb Zero Repository Rules**                          |
| ------------------------------------------------------------ |
| 1. You are NOT allowed push any changes directly to **develop** or **master** branches. |
| 2.  Create new branch then clone that branch.                |

Changes have to be moved in below fashion (Only via Merge): **Step 1** From working branch --> develop branch **Step 2** From develop branch --> master branch

**If you want to commit your changes to develop branch then below steps need to be followed:**

1. Initiate a merge request from your working branch to **develop** branch.
2. Ask one of your colleague to review and approve the merge request.

**If you want to commit your changes to master branch then below steps need to be followed:**

1. Initiate a merge request from **develop** branch to **master** branch.
2. Ask one of your colleague to review and approve the merge request.

**Prerequisites to run the Lightbulb Zero locally**

- Install express.js

**Steps to follow to run Lightbulb Zero locally** **Step 1** Create your own working branch from **develop** branch **Step 2** Later clone your working branch on your laptop **Step 3** Run below commands: Move to cloned directory ***cd node_JS2-Versie 2.0\*** Install all the dependencies ***npm install\*** Run the app $ ***npm start\*** OR run with nodemon  $ ***npm run dev\***











# Node.js - Lightbulb Application

This is a user login and registration app using Node.js, Express, Passport, Mongoose, EJS and some other packages.



### Usage

```sh
$ npm install
```

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```

### MongoDB

Open "config/keys.js" and add your MongoDB URI, local or Atlas
