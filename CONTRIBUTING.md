# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
2. Submit your pull request and mark the reviewers or notify them of your PR
3. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

## After Pull Request Accepted [Reviewers Only]
1. checkout in master branch
2. sync with origin
3. run `npm version [major|minor|patch] -m ":bookmark: release new version <next version>"`
4. `git push origin master --tags` :tada: