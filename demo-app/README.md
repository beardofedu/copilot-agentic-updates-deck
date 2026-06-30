# TechMart Mini Demo App

This lightweight app supports the presenter-led flows in `../demo.md`.

## Run locally

```bash
cd demo-app
npm install
npm start
```

Open: `http://localhost:3000`

## App surfaces used in the demo

- `GET /api/products` and `GET /api/products/:id`  
  Used for Copilot App issue-to-PR demos (feature and refactor work).

- `POST /api/cart/quote`  
  Contains a purposely flawed discount implementation for critique/fix demos.

- `POST /api/password-reset-token`  
  Contains intentionally weak token generation for security remediation demos.

- `public/app.js` promo banner rendering  
  Intentionally uses `innerHTML` for XSS-fix workflow demonstrations.

## Notes

- This app intentionally contains demo-friendly defects so the created GitHub issues have realistic, visible outcomes.
- Do not use this code as a production baseline.

