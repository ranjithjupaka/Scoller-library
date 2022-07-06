import React from "react"
import { useScroller } from "../useScroller"

export default {
    title: "UseScrollor",
}

export const UseScrollorExample = () => {
    const scroller = useScroller({ y: 100, isSmooth: true })

    return (
        <div style={{ height: 3000 }}>
            <button onClick={scroller}>Click Me</button>
        </div>
    )
}
