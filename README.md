# web-helper discord bot

## Information

## How To Install
### Software
Before you are able to start working on the bot, you will need certain programs to get you started.
- A code editor such as [Visual Code](https://code.visualstudio.com/)
- You need an Apache server installed so you can connect your bot with our database [XAMPP](https://www.apachefriends.org/index.html)
- [GIT](https://git-scm.com/) to clone this project
- [NodeJS](https://nodejs.org/) to install all the modules and packages that are needed

### Setting up GIT
Open GIT. You can do this by right clicking anywhere on your Desktop and select `Git Bash Here`. Once it opens you would need to set up your username and email address.

1. Type `git config --global user.name "[YOUR_GITHUB_USERNAME]"` and press enter.
2. Type `git config --global user.email "[YOUR_GITHUB_EMAIL]"` and press enter.

### Forking Repository
Once you have downloaded the above you can `fork` this repository. A new window will be opened with a message that its trying to fork a repository. Wait until this is done.

After that you want to `clone` the repository to your computer.
1. Create a new folder wherever you like
2. Right-click in the created folder and click on `Git Bash Here`
3. Type `git clone https://github.com/[YOUR_USERNAME_HERE]/web-helper.git`
4. Navigate in the folder by typing `cd web-helper`
5. Copy paste the following into your Git Bash window `git remote add upstream https://github.com/DevShaded/web-helper.git`

### How to catch up to your git fork to master
1. Right-click on the `web-helper` folder and click on `Git Bash here`
2. Type `git fetch upstream`
3. Type `git checkout master`
4. Then type `git merge upstream/master`

Do these commands when your branch is behind the master. It will say on top off the GitHub repository.
Example: `This branch is 4 commits behind DevShaded:master.`

### Installing Project Packages
1. Type `npm install` in your Git Bash window

### Installing PM2
PM2 is a process application that is able to run your project. 
1. Type `npm install pm2 -g` in your Git Bash.

### Bot Token
1. Make a `.env` file for the tokens.
2. You will get the token and the DB from DevShaded on Discord


## Starting Your Bot
1. Open a new Git Bash window (Navigate to your project folder, right click and select `Git Bash Here`).
2. Type the following and press enter `pm2 start pm2-server-start.json`
3. Type the following and press enter `pm2 logs 0` or `pm2 logs web-helper`
You will now see a window with information about the bot. (Its logs. It should output `Bot has succesfully signed in and is listening to events`)
4. Open Discord and see the magic bot being online!
