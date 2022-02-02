const ang1 = 40;
const ang2 = 60;
const ang3 = 80;

if ((ang1 + ang2 + ang3) != 180) {
    console.log(false);
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log(false);
} else {
    console.log(true);
}