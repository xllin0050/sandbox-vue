---
title: About Array
---

# About Array

### Object.entries

將物件轉成陣列

```javascript
const obj = { a: 1, b: 2 }
const ary = Object.entries(obj)
console.log(ary) //[['a',1],['b',2]]
```

將陣列轉物件 array of arrays

```javascript
const ary = [
  ['a', 1],
  ['b', 2],
]
const obj = Object.fromEntries(ary)
```

## 效能

```javascript
// forEach benchmark code 68.13%
array.forEach((item) => result.push(item * 2))
// map benchmark code 100%
array.map((item) => item * 2)
```

## map

無法操作類陣列,如 DOM

可 method chaining

運算原始陣列元素後，回傳一個新的陣列，不會改變陣列長度

```javascript
const ary = [1, 2, 3]

const newAry = ary.map((x) => x + 1)
console.log(newAry) //[2, 3, 4]
```

若原始資料為陣列內的物件,則 map 後會改變原始資料的值

```javascript
const data = [{ a: 1 }, { b: 2 }]
const newData = data.map((e) => {
  return e + 1
})
```

## forEach

無法使用 method chaining

```javascript
const ary = [1, 2, 3]

const newAry = ary.forEach((x) => {
  return x + 1
})
console.log(newAry) //return undefined
```

## reduce

```javascript
Array.reduce(callback[(accumulator, currentValue, currentIndex, array)], initialValue)
```

- accumulator：經由個別 currentValue 加總的累計值
- currentValue: Array 的個別 item
- currentIndex：Array item 的索引
- array：呼叫該 Array method 的陣列
- initialValue：預設值，放在 function 的最後方，非必填

陣列加總

```javascript
const ary = [1, 2, 3]
const newAry = ary.reduce((acc, curr) => {
  return acc + curr
})
console.log(newAry) //6
```

陣列總值之平均

```javascript
const euros = [29.76, 41.85, 46.5]

const average = euros.reduce((total, amount, index, array) => {
  total += amount
  if (index === array.length - 1) {
    return total / array.length
  } else {
    return total
  }
})

average // 39.37
```

陣列合併

```javascript
const arr = [
  [1, 2, 3],
  [4, 5, 6],
].reduce(callback, [])

function callback(acc, curr) {
  return acc.concat(curr)
}
console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
```

陣列合併

```javascript
const ary = [1, 2, 3]
const result = ary
  .map((e) => {
    const tempAry = []
    for (let i = 0; i < e; i++) {
      tempAry.push(e)
    }
    return tempAry //[ [ 1 ], [ 2, 2 ], [ 3, 3, 3 ] ]
  })
  .reduce((acc, curr, index, ary) => {
    return acc.concat(curr)
  }, [])

console.log(result) //[ 1, 2, 2, 3, 3, 3 ]
```

陣列轉物件

```javascript
const a = [1, 2, 3].reduce(callback, {})

function callback(acc, curr, i) {
  const key = 'u' + i
  acc[key] = curr
  //obj['key'] = value or obj.key = value 可新增至物件中
  return acc
}
console.log(a) //{ u0: 1, u1: 2, u2: 3 }
```

排序

```javascript
const a = [N01, N02, N03]

a.sort(function (a, b) {
  return a.slice(-2) - b.slice(-2)
})
```

分割陣列

```javascript
const dataChunk = (array, size) => {
  // This prevents infinite loops
  if (size < 1) throw new Error('Size must be positive')

  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

const chunk = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [])
```

從陣列中刪除重複的內容

```javascript
var arr = [1, 2, 3, 4, 1, 2, 3, 1, 2, 3]

var uniqueArr = [...new Set(arr)]

console.log(uniqueArr) //[1, 2, 3, 4]

var arrTwo = ['Hello 1 ', ' Hello 2 ', 'Hello 1 ', ' Hello 2 ', 'Hello 1 again']

const filteredArray = arrTwo.filter((ele, ind) => arrTwo.indexOf(ele) == ind)

console.log('The filtered array', filteredArray) //The filtered array  (3) ["Hello 1 ", " Hello 2 ", "Hello 1 again"]
```
