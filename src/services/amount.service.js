import { v4 as uuidv4 } from 'uuid';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomAmount() {
    return getRandomInt(100, 999);
}

export const createAmountObject = () => {

    return {
        id: uuidv4(),
        amount: createRandomAmount(),
    }
};