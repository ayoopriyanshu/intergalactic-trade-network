import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('tradeInitiated', (tradeData) => {
    console.log('Processing trade event: ', tradeData);
})


eventEmitter.on('cargoCreated', (cargoData) => {
    console.log('Processing cargo event: ', cargoData);
})

const realTimeUpdates = [];

eventEmitter.on('realTimeUpdate', (update) => {
    realTimeUpdates.push(update);
})

export const getRealTimeUpdates = () => {
    return realTimeUpdates.slice(-10);
}

export default eventEmitter;