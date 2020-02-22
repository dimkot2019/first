const timer1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('timeout1 end');
  }, 1000);
});

const timer2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('timeout2 end');
  }, 5000);
});

const timer3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('timeout3 end');
  }, 2000);
});

const allTimerEnd = Promise.all([timer1, timer2, timer3]);

allTimerEnd.then(timers => {
  console.log('timers:', timers);
});