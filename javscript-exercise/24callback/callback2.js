function callbackHell() {
    console.log('Start!');

    setTimeout(() => {
        console.log('2 seconds passed since start.');
        setTimeout(() => {
            console.log('another 2 seconds. that means 4 since start.');
            setTimeout(() => {
                console.log('another 3 seconds. 7 in total.');
                setTimeout(() => {
                    console.log('another 5 seconds. 12 in total.')
                }, 5000);
            }, 3000);
        }, 2000);
    }, 2000);
};

callbackHell();