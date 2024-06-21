<h1>Project contribution guide.</h1>

> This file contains the contribution guide for this project. Please ensure to follow all the listed instructions strictly to ensure your pull requests are not turned down. **Note that all issue titles must be in lower-case letters**.

# How to contribute.

## If you are handling a github issue.

**skip the first 4 steps below if you got(or was assigned) a task from Trello, directly from a project admin, or from any other task management board.**

1. Select an issue you wish to handle.
2. Assign the issue to yourself by commenting on the issue that you are taking charge of handling it.
3. Create a new branch for that issue(create a new branch for every new issue you pick) The branch naming should follow this pattern - start with the number of the issue, followed by an underscore and then the title of that issue e.g.

> “250_light-and-dark-theme-toggle-button-is-not-responding-to-clicks”.

> There must not be any spaces between each word. Replace spaces with dashes(hyphens) except the one after the issue number that must be an underscore.

4. Handle the issue on the new branch created and make a pull request.

> ENSURE TO MAKE A PULL REQUEST FOR EVERY ISSUE YOU RESOLVE/HANDLE.

## If you got a task from Trello or any other task management board.

If you got(was assigned) a task from Trello, directly from a project admin, or from any other board. There will be no need to create a new branch for every new task. Creating new branches for every new task, is only for issues gotten from github as detailed above.

- to name your branch in this case, simply follow this pattern - "yourGithubUserName_dev-flow"

> Simply use this single branch for handling all tasks. But ensure to create a pull request for every completed task.

# Commit patterns.

Commits on this project are to be well structured. The following rules must be followed when making commits, or else your pull request WILL BE CLOSED. Note that all commit messages must be in lower-case letters.

1. Every commit must be one of the following types.

- refactor - for code and other file updates/changes.
- assets - for the addition of assets to the project (e.g images, gifs, fonts etc)
- fix - bug fixes.
- chore - for regular or other normal activities on the repo like adding new files to the project or trashing files.
- init - for new initializations of a fresh process on the repo e.g.

> “init: initialized npm on the server folder”

- style: CSS only changes.
- doc: changes relating to documentation, and other related document changes
- bulk: for commits that are more than 10 files - especially if none of the above commit types fits or if you're confused about which commit type to use.
- delete: for processes that involve deleting any content of the repo.

> **This does not imply a permission to delete files from the project. Never delete any project files. Simply create a trash folder in your working directory and put all unwanted files into it(the trash folder)**.

- feat: for commits that involve the implementation of a new feature.

2. Commit messages should follow this pattern.

“commit-type: commit message” - e.g.

> “feat: I added the light/dark theme toggle functionality”. 

Remember to keep commit messages short, simple, and straight to the point.

NB: Commit-lint and Husky will be used to moderate commits before you are allowed to push to github. You will also be able to view the commit-lint file and see all the commit types (including those that may not be listed here).

**Read this article to get more information about what is actually happening under the hood - https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/**.

# Pull requests.

The following instructions will guide you on how to create pull requests for this project. Please follow them strictly to prevent your pull request from being closed/rejected.

## If you are handling a github issue.

- Your pull request titles should be according to the following pattern, and they must all be in lower-case letters.
  “Issue **branch-name** resolved” - e.g

  > “issue 250_add-light-and-dark-theme-toggle-is-not-responding-to-clicks resolved”

## If you are handling a task from Trello, one assigned to you by a project-admin, or one gotten from any other task management board.

Do the following if the task you're handling falls under the above heading.

### Pull request Title

- Your pull request title should simply be a brief description of the task handled.

> e.g "sign-up page build completed successfully"

### Pull request body/content.

Your pull request body should contain the following.

- A brief introduction about the issue/task you handled/resolved.
- How you handled the issue - a brief explanation of the method(s)/step(s)/process(es) with which you handled the issue/task.
- Add any other comment you wish to add
- Always mention your pull request reviewer.

Cheers!!!
Happy Coding

- @Okpainmo
