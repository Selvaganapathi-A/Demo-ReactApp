1. add `svgr` in `vite.config.js`

```javascript
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [..., svgr()],
})
```

1. add `?react` at the end off svg icon import.

1. pass `color` from the react component.

```javascript

import SvgIcon from "./assets/react.svg?react";

...

<SvgIcon className="logo react" color="pink" />


```
