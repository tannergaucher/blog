---
title: Removing Files from a Github Repository and .gitignore is ignored by Git
date: "2019-04-09"
description: Problem of the day
---

While working on a Gatsby site, I accidentally added the `.env.production` and `.env.development` to git, and pushed it up to Github on the initial commit. 🤦‍♂ I've done this before, because the Gatsby `.gitignore` lists `.env`, however it doesn't ignore `.env.production` and `.env.development`, which are the required names by convention by Gatsby. Maybe I'm missing something, but I'll look into at and possibly raise an issue on gihub.

## Problem: Remove .env files from Github

My first google for a solution brought me [here.](https://help.github.com/en/articles/removing-files-from-a-repositorys-history) First, I added the .env files to gitignore. Then I tried:

1. Remove File

```
$ git rm --cached *file_to_remove*
```

2. Commit change with ammend

```
git commit --amend -CHEAD
```

3. Push commit to github

```
git push
```

This didn't work, because it was not the most recent commit. I'd already pushed a change that didn't work.

## Another Problem

The `.env.development` and `.env.production` were in my `.gitignore` but weren't being recognized. They weren't being greyed out in VS Code.

## Solution

[Solution from Stack Overflow.](https://stackoverflow.com/a/11451731) Run this on the root folder of repository

```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
git push
```

Worked 🎊
