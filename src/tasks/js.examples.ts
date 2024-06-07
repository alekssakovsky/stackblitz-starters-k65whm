export function timeoutExample() {
  setTimeout(timeoutExample, 0);
}

export function promiseExample() {
  console.log('QUEUE');
  queueMicrotask(promiseExample);
}
