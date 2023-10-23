function printDate() {
  const time = new Date();

  setInterval(() => {
    time.setSeconds(time.getSeconds() + 1);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
  }, 1000);
}

printDate();
