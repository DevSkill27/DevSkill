import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Actions, GITHUB_REPOSITORY is set to "owner/repo".
// For a project page (e.g. /repo-name/), the base must include the repo name;
// for a user/org page (e.g. owner.github.io), it must be "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  repoName && !repoName.endsWith('.github.io') ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
