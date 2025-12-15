# Contributing to React Weather App

Thank you for your interest in contributing to the React Weather App! This guide will help you understand how to contribute to this project.

## Table of Contents
- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
- [Branch Strategy](#branch-strategy)
- [Making Changes](#making-changes)
- [Submitting Your Contribution](#submitting-your-contribution)
- [Troubleshooting](#troubleshooting)

## Getting Started

Before you start contributing, make sure you have:
- A GitHub account
- Git installed on your local machine
- Node.js (>= 16 recommended) and npm or yarn
- Forked this repository to your own GitHub account

## Git Workflow

### Initial Setup

1. **Fork the repository** on GitHub by clicking the "Fork" button at the top right of this repository.

2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-weather-app.git
   cd react-weather-app
   ```

3. **Add the original repository as upstream** (so you can sync with the main project):
   ```bash
   git remote add upstream https://github.com/Andrew112/react-weather-app.git
   ```

4. **Verify your remotes**:
   ```bash
   git remote -v
   ```
   You should see:
   - `origin` pointing to your fork (YOUR_USERNAME/react-weather-app)
   - `upstream` pointing to the original repository (Andrew112/react-weather-app)

## Branch Strategy

### What Branch Should I Be On?

The branching strategy for this project follows these guidelines:

- **`main`** (or `master`) — The primary branch with stable, production-ready code
- **Feature branches** — Create a new branch for each feature or bug fix
- **Name your branches descriptively** — Use format: `feat/feature-name` or `fix/bug-name`

### Creating a Feature Branch

Always create a new branch for your changes:

```bash
# First, make sure you're on the main branch
git checkout main

# Update your local main branch with the latest changes
git pull upstream main

# Create and switch to a new feature branch
git checkout -b feat/your-feature-name
```

**Examples of good branch names:**
- `feat/add-dark-mode`
- `fix/weather-api-timeout`
- `docs/update-readme`
- `refactor/component-structure`

## Making Changes

1. **Make your changes** in your feature branch
2. **Test your changes** thoroughly:
   ```bash
   npm install
   npm start
   npm test  # if tests are available
   npm run build  # ensure the build succeeds
   ```

3. **Commit your changes** with clear, descriptive messages:
   ```bash
   git add .
   git commit -m "Add dark mode toggle feature"
   ```

### Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- First line should be a brief summary (50 characters or less)
- Add a detailed description if needed after a blank line

**Good commit messages:**
```
Add dark mode toggle feature

- Create toggle component in header
- Add dark mode styles
- Save user preference to localStorage
```

```
Fix weather API timeout issue

- Increase timeout to 10 seconds
- Add retry logic for failed requests
```

## Submitting Your Contribution

### Pushing to Your Fork

Once you've committed your changes locally, push them to your fork on GitHub:

```bash
# Push your feature branch to your fork (origin)
git push origin feat/your-feature-name
```

If this is the first time pushing this branch, Git will set up tracking automatically.

### Creating a Pull Request

1. Go to your fork on GitHub (`https://github.com/YOUR_USERNAME/react-weather-app`)
2. You should see a prompt to "Compare & pull request" for your recently pushed branch
3. Click that button (or go to the "Pull requests" tab and click "New pull request")
4. Make sure the base repository is `Andrew112/react-weather-app` and the base branch is `main`
5. Make sure the head repository is your fork and the compare branch is your feature branch
6. Fill in the pull request template:
   - **Title**: Brief description of your changes
   - **Description**: Detailed explanation of what you changed and why
   - Reference any related issues (e.g., "Fixes #123")
7. Click "Create pull request"

### Keeping Your Branch Up to Date

If the main branch gets updated while you're working on your feature:

```bash
# Fetch the latest changes from upstream
git fetch upstream

# Switch to your main branch
git checkout main

# Update your local main branch
git pull upstream main

# Switch back to your feature branch
git checkout feat/your-feature-name

# Merge the latest main into your feature branch
git merge main

# Or rebase your feature branch onto main (cleaner history)
git rebase main

# Push the updated branch to your fork
git push origin feat/your-feature-name
```

## Troubleshooting

### "Permission denied" when pushing

**Problem**: You can't push to `Andrew112/react-weather-app` directly.

**Solution**: You should push to your own fork. Make sure `origin` points to your fork:
```bash
git remote -v
```
If `origin` points to `Andrew112/react-weather-app`, update it:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/react-weather-app.git
```

### "Branch is behind origin/main"

**Problem**: Your local branch is out of date.

**Solution**: Pull the latest changes:
```bash
git pull upstream main
```

### Accidentally committed to main

**Problem**: You made commits directly to the main branch instead of a feature branch.

**Solution**: Create a new branch from your current position:
```bash
git checkout -b feat/your-feature-name
git push origin feat/your-feature-name
```
Then reset your main branch:
```bash
git checkout main
git reset --hard upstream/main
```

### Merge conflicts

**Problem**: Your changes conflict with changes in the main branch.

**Solution**:
1. Fetch and merge the latest changes:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```
2. Git will mark the conflicting files. Open them and look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Resolve the conflicts by editing the files
4. After resolving, stage and commit:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   git push origin feat/your-feature-name
   ```

### Need to update a pull request

**Problem**: You need to make changes after creating a pull request.

**Solution**: Just push more commits to the same branch:
```bash
# Make your changes
git add .
git commit -m "Address review comments"
git push origin feat/your-feature-name
```
The pull request will automatically update with your new commits.

## Questions?

If you have questions or need help:
- Open an issue on GitHub
- Reach out in the pull request comments
- Check existing issues and pull requests for similar questions

Thank you for contributing! 🎉
