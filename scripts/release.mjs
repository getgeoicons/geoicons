#!/usr/bin/env node
// Lockstep release: sets every @geoicons/* package (and the root) to one
// version, keeps the internal @geoicons/core dependency in sync, then commits,
// tags, and pushes. Publishing itself is handled by .github/workflows/release.yml
// when you publish the pushed tag as a GitHub Release.
//
// Usage: node scripts/release.mjs <version>   e.g. node scripts/release.mjs 1.2.0

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packages = ['core', 'react', 'vue', 'angular', 'vanilla'];

const version = process.argv[2];
if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version ?? '')) {
  console.error('Usage: node scripts/release.mjs <version>  (e.g. 1.2.0)');
  process.exit(1);
}

const git = (...args) => execFileSync('git', args, { cwd: root, stdio: 'inherit' });

if (execFileSync('git', ['status', '--porcelain'], { cwd: root }).length) {
  console.error('Working tree not clean. Commit or stash first.');
  process.exit(1);
}

const setVersion = (file) => {
  const path = join(root, file);
  const pkg = JSON.parse(readFileSync(path, 'utf8'));
  pkg.version = version;
  if (pkg.dependencies?.['@geoicons/core']) {
    pkg.dependencies['@geoicons/core'] = `^${version}`;
  }
  writeFileSync(path, JSON.stringify(pkg, null, 2) + '\n');
};

setVersion('package.json');
for (const p of packages) setVersion(`packages/${p}/package.json`);

// Refresh the lockfile so it records the new versions.
execFileSync('npm', ['install', '--package-lock-only'], {
  cwd: root,
  stdio: 'inherit',
});

git('add', '-A');
git('commit', '-m', `Release: v${version}`);
git('tag', `v${version}`);
git('push', 'origin', 'HEAD', '--follow-tags');

console.log(`\nPushed v${version}. Publish the tag as a GitHub Release to ship to npm.`);
