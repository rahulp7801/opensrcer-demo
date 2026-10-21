# textkit

Small, dependency-free text helpers for TypeScript.

| Function | What it does |
|---|---|
| `slugify(title)` | `"Hello, World!"` → `"hello-world"` |
| `truncate(text, max)` | Shorten on a word boundary with an ellipsis |
| `parseDuration(input)` | `"1h30m"` → `5400000` milliseconds |
| `splitCsvLine(line)` | Split one CSV line, honouring quoted fields |

```sh
npm test
```

This repository is a demo target for [opensrcer](https://opensrced.vercel.app): its open issues are real bugs
in the code above, kept small so an agent can fix each one in a single pull request.
