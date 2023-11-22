

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const Increment = (num) => {
    return {
        type: INCREMENT,
        value: num
    }
}
export const Decrement = (num) => {
    return {
        type: DECREMENT,
        value: num
    }
}
