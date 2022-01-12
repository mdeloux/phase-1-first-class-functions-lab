// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function () {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function (num2) {
        return num1 * num2;
    };
}

const fareTwo = createFareMultiplier();

function fareDoubler(fareTwo) {
    return fareTwo * 2;
}

const fareThree = createFareMultiplier();

function fareTripler(fareThree) {
    return fareThree * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return drivers, returnFirstTwoDrivers();
}
