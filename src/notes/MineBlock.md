```javascript
  const WIDTH = 10
  const HEIGHT = 10
  const data = reactive(
    Array.from({ length: HEIGHT }, (_, y) => Array.from({ length: WIDTH }, (_, x) => y * 10 + x + 1))
  )
```
