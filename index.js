import { Dimensions } from 'react-native';

let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;

let ht, wt;

// if height is bigger than width, it means the phone has bean rotated,
// in this situation we want to swap the measures between ht() and wt()
if (height > width) {

    // this function will be used to make a responsive height.
    ht = (value) => height * value / 100;

    // this function will be used to make a responsive width.
    wt = (value) => width * value / 100;

} else {

    // this function will be used to make a responsive height.
    ht = (value) => width * value / 100;

    // this function will be used to make a responsive width.
    wt = (value) => height * value / 100;

};

let layout = { ht, wt };

export { layout };