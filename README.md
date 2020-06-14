# Animate Inview

A react component that animates when it comes into view.

# How To Install

yarn add animate-inview

# Example

```
import Animated from "animate-inview"

const initial = { opacity: 0 , scale: .5}
const animated = { opacity: 1, scale: 1}

<Animated initial={initial} animated={animated} /><div><h3>Header</h3><p>Body</p></div></Animated>
```

# Technologies

Project is created with:

- react-intersection-observer
- framer-motion
- typescript
