# Development

## Getting Started
1. Install [Homebrew](http://brew.sh/).
1. Install Node via a Node Version Manager, i.e. [NVM](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) (Ensure you are on Node `14`).
1. Run `nvm use` to ensure  min version v14 is being used.
1. install [Yarn](https://yarnpkg.com/getting-started/migration/) globally. Run `npm install -g yarn`
1. If this is your first time running the app, run `yarn install`.
2. Create .env file with the `.env.example` variables

## Scripts
You interact with the application through `npm scripts`. See all of them in [package.json](./package.json)

#### API SERVER
| command | description |
|---|---|
| `yarn dev` | run vianch app in dev mode without compiling and refreshing the browser when a new change in the code is made. |
| `yarn build` | compile for production. |
| `yarn start:` | start the compiled code port 8080. |
| `yarn lint` | run and detect lint errors |
| `yarn lint:fix` | try to fix automatically lint errors|
| `yarn clean` | delete any package lock, delete node_modules and run a fresh install |


#### PRE COMMITS AUTOMATION

- see: [husky 5 Documentation](https://dev.to/typicode/what-s-new-in-husky-5-32g5)
- see: [husky 6 Documentation](https://typicode.github.io/husky/#/)
- run: `$ husky install .config/husky`
- run: `$ husky add .config/husky/pre-commit "lint-staged"`
- add any other pre commit that you want using the previous command.

# Contributing

We follow a standardized set of practices to ensure consistency across our codebase and team. Here is a list of practices we like to follow.

## Branch Names
When branching off of develop to create your feature follow the template of `yourName/CLUBHOUSEID_optional_additional_title`. We do this to ensure code organization and to make it easier to find branches to PR.

## Commit Message Format
Each commit message consists of a **header**, a **body**, and a **footer**.

The `header` is mandatory and must conform to the [Commit Message Header](#commit-header) format.

The `body` is mandatory for all commits except for those of type "docs".
When the body is present it must be at least 20 characters long and must conform to the [Commit Message Body](#commit-body) format.

The `footer` is optional. The [Commit Message Footer](#commit-footer) format describes what the footer is used for and the structure it must have.

Any line of the commit message cannot be longer than 100 characters.

#### <a name="commit-header"></a>Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: CLUBHOUSE ID
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Type

Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **test**: Adding missing tests or correcting existing tests

##### Scope
The scope should be the id of the CLUBHOUSE task

##### Summary

Use the summary field to provide a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end


#### <a name="commit-body"></a>Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.
You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.


#### <a name="commit-footer"></a>Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE: " followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

#### Plugin for commits
- install [cz-cli](https://github.com/commitizen/cz-cli). Run `npm install -g commitizen`
- Alternative with emojis [git-cz](https://www.npmjs.com/package/git-cz). Run `npm install -g yarn`
- optional packages: [cz-emoji](https://github.com/ngryman/cz-emoji) / [gitmoji](https://github.com/Landish/cz-gitmoji)

## Pull Requests

### Base Branch
You will almost always want to make the base branch `develop`. Generally we commit code to the develop branch during a sprint. At the end of the sprint we branch a release candidate off of `develop` and make a PR into `master`.

If you have to make a hotfix on to production, you would then make the base branch `master`.

If you are working on a feature that is on a feature branch, the base branch should be that feature branch. The feature branch's base branch should be `develop`.

### Title
The title of your PR should follow this template: `[CODEHOUSE] Human readable title`. By putting the CLUBHOUSE ticket number in brackets CLUBHOUSE can automatically link to it from within the ticket. Include a title that is easy to grok quickly. The title does not have to be the same as the title of the CLUBHOUSE ticket. Oftentimes it is different and more clear for develops.

### Template
We have a Pull Request template. Whenever you create a new PR in GitHub you will see the description field already filled in with question headers. Do your best to fill out each question to the best of your ability. Sometimes question headers actually don't pertain to your PR. In those cases you can remove the question header.

For the question, `What are the relevant Clubhouse tasks?` add a hyperlink to the CLUBHOUSE ticket this PR relates to.

### Labels
We also make use of GitHub labels for Pull Requests to quickly identify which PRs need immediate action. If you create a PR that is not yet ready for review, add the label `Not Ready for Review`. If your PR is ready, add the label `Awaiting Code Review`.

If you review someone's PR and make requests for changes, update the label of the PR to `Changes Requested`. If a PR receives two approvals, change the label to `Code Approved`.

### Checks
We have one checks on PRs that are required before they can be merged.

PRs also require at least one approval from peers before they can be merged.

### Merge
- To do any merge make sure that there is no any CI errors, unit test error,
- then press the MERGE button in the option `SQUASH AND MERGE`
- finally, delete the branch

### 🐟 DEPLOYMENT WITH DOCKER 	🐳 

1.  **From local files**:  Create docker image 
- go to project folder
- create docker image
```bash
sudo docker build -t viach-site .
```

1. stop any container, eg: `sudo docker container stop c672089577f8`
```bash
sudo docker container stop {containerId}
```

3. start a new container
```bash
sudo docker run -d -p 3000:8080 viach-site
```

4. remove any un used containers and images
```bash
sudo docker container prune
sudo docker image prune -a
```

## RUNNING DOCKER WITH docker-compose 🐋
- running locally 
```bash
sudo docker-compose up
```

- running locally develop
```bash
docker-compose -f docker-compose-develop.yml up 
```

- running detached mode: Run container in the background / Don't start linked services
```bash
sudo docker-compose up -d --no-deps
```


### 🏗️ DEPLOYMENT MANUALLY

- ⚠️ This only works while the terminal is open (only test purposes)
- If you want to use permanently please install [PM2](https://pm2.keymetrics.io/)

1. go to project folder
```bash
cd ~/vianch-site
```

2. build app
```bash
yarn run build
```

3. start the app: should start  the app at port 3000
```bash
yarn run start
```


### NGINX documentation
- [Digital ocean algorithms](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms)
- [nginx regex](https://www.nginx.com/blog/regular-expression-tester-nginx/)

### Edit nginx documentation
```bash
cd /etc/nginx/sites-available/
sudo nano default
```
