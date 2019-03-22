# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, or any other method with the owners of this repository before making a change.

## Pull Request Process
1. Fork the project and create your feature/fix/refactor
2. In case of creating or updating a component, update the README.md with details of changes to the component and its props.
3. Add its stories for storybook to all possible variations of the new component or update stories in case of component update/refactor.
4. Submit your pull request and mark the reviewers or notify them of your PR
5. The versioning scheme we use is [SemVer](http://semver.org/).
6. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## After Pull Request Accepted [Reviewers Only]
1. checkout in master branch
2. sync with origin
3. run `npm version [major|minor|patch] -m ":bookmark: release new version <next version>"`
4. `git push origin master --tags` :tada: