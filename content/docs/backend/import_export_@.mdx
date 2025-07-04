# ✅ Node.js Module System Summary

## 🧱 1. Module Types

| Type         | Import Syntax         | Export Syntax          | File Type                               | Node Default     |
| ------------ | --------------------- | ---------------------- | --------------------------------------- | ---------------- |
| **CommonJS** | `const x = require()` | `module.exports = {}`  | `.js`                                   | ✅ Yes           |
| **ESM**      | `import x from`       | `export const x = ...` | `.mjs` or `.js` with `"type": "module"` | ❌ (must opt-in) |

---

## ⚙️ 2. TypeScript + Modules

### ✅ CommonJS in TS

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2020"
  }
}
```

- Use `require` or `import`, works fine.

---

### ✅ ESM in TS (Modern Projects)

- `package.json`

```json
{ "type": "module" }
```

- `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "esModuleInterop": true,
    "strict": true
  }
}
```

- 📌 Must include `.js` in `import` path in source:

```ts
import { add } from './math.js';
```

---

## 📦 3. Directory and Resolution Behavior

| Case                  | Behavior                                             |
| --------------------- | ---------------------------------------------------- |
| Import folder         | Looks for `index.js` or `main` field in package.json |
| `.js`, `.ts`, `.json` | Tried in that order                                  |
| `"type": "module"`    | Forces ESM globally                                  |
| Dynamic `require()`   | Not allowed in ESM                                   |

---

## 🧬 4. Path Aliases with `@import`

### ✅ Enable in `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@utils/*": ["utils/*"],
      "@controllers/*": ["controllers/*"]
    }
  }
}
```

### 📁 Folder Structure

```
src/
  utils/
    math.ts
  controllers/
    user.ts
```

### ✅ Usage in Code:

```ts
import { add } from '@utils/math';
import { getUser } from '@controllers/user';
```

### 🔧 Use with ESM?

- Requires bundler (`tsup`, `vite`, `webpack`) or runtime aliasing (`tsconfig-paths`, `module-alias`)
- Won’t work natively in Node unless using a loader or transpiler

---

## ✅ Best Practices

| Goal                       | Recommendation                                |
| -------------------------- | --------------------------------------------- |
| Simplicity                 | Use CommonJS (`require`)                      |
| Modern/Frontend/TS project | Use ESM + `"type": "module"` + `"ESNext"`     |
| Large apps                 | Use `@import` aliases with bundler            |
| Library publishing         | Build for both CJS + ESM (`tsup`, `rollup`)   |
| Stability                  | Don’t mix `require` and `import` in same file |

---

## 🔚 Final Thoughts

- **Use CommonJS** for small projects, scripts, and CLI tools.
- **Use ESM** for modern apps, TypeScript, and anything long-term.
- **Enable `@import` aliases** only when your project needs scaling or clean architecture.
