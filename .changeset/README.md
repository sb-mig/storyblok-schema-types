# Changesets

`storyblok-schema-types` uses [Changesets](https://github.com/changesets/changesets)
as the source of truth for version bumps, the changelog, and npm releases.

## Normal workflow

For any user-visible change:

1. Branch from `master`, make your change, open a PR.
2. Run `npm run changeset` and describe the change (pick `patch` / `minor` / `major`).
3. Commit the generated `.changeset/*.md` file with your code and push.

CI fails a PR that changes the package but ships no changeset.

## Release workflow (automated)

1. When the PR merges to `master`, the **Release** workflow opens (or updates) a
   **"Version Packages"** PR that consumes the pending changesets, bumps
   `package.json`, and writes `CHANGELOG.md`.
2. Merging that **Version Packages** PR publishes the new version to npm and
   tags the release.

Publishing requires an `NPM_TOKEN` repository secret. Without it, the Version
Packages PR is still created automatically — only the final `npm publish` needs
to be run by hand.
