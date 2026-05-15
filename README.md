# LIT Merchant API Documentation

Static documentation site for the LIT Merchant dynamic payment QR API flow.

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.

The site documents the customer integration flow:

- Base URL: `https://api.litnow.vn`
- Merchant-side activation is not required
- WAP is outside the scope of this dynamic QR flow
- Main payment flow: `POST /upay/v2/precreate`
- Optional scanner flow: `POST /upay/v2/pay`
- Fixed precreate fields: `payway=2001`, `sub_payway=2`, `extended.sqb_cent_flag=1`
- Refund, cancel, and revoke are documented as post-payment operations that are not available through API yet
