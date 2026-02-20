# Finance Demo - GitHub Collaboration

A static financial website template built with **Vite + Tailwind CSS v4**, designed for demonstrating collaborative workflows in GitHub.

## Quick Start

```bash
npm install
npm run dev
```

## Demo: Collaborative Editing

The team section data lives in `src/data/team.json`. To simulate a collaborative workflow:

1. Fork or clone this repo
2. Create a new branch: `git checkout -b add-new-member`
3. Edit `src/data/team.json` — add, remove, or modify team members
4. Commit and push your changes
5. Open a Pull Request on GitHub
6. Review and merge!

### Team Data Structure

```json
{
  "members": [
    {
      "name": "Sofia Lin",
      "role": "Founder & CEO",
      "image": "https://example.com/photo.jpg",
      "link": "#"
    }
  ],
  "advisers": [
    {
      "name": "John Doe",
      "role": "Adviser, Example Company",
      "description": "Short bio here.",
      "image": "https://example.com/avatar.jpg",
      "link": "#"
    }
  ]
}
```

## Tech Stack

- [Vite](https://vite.dev/) — Build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling
- Vanilla JavaScript — No framework needed

## Based On

Adapted from [Bejamas Astro Storyblok Finance Starter](https://github.com/bejamas/astro-storyblok-finance-starter), converted to a static site without CMS dependency.
# finance-demo
