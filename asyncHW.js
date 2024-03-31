// Problem -> console 10 time 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }
// method 1
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    },1000);
}

// let y;
// for (var y = 0; y < 10; y++) {
//     setTimeout (() => console.log(y),1000);
// }

// method 2

for(var i=0; i<=9; i++) {
    const func = (a) => {
        setTimeout(() => {
            console.log(a);
        }, 1000);
    };
    func(i);
}

// method 3


let x = 0;
while (x < 10) {
    taskX(x);
    x++;
}
function taskX(i) {
    setTimeout(function() {
        console.log(i);
    }, 1000 );
}

// method 4



let z = 0;
do {
    taskZ(z);
    z++;
} while (z < 10);
function taskZ(i) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}