import { BUY_ICECREAM, RESTORE_ICECREAM } from "./iceCreamTypes"

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}
export const restoreIceCream = () => {
    return {
        type: RESTORE_ICECREAM
    }
}