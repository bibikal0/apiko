function countDown(seconds) {
  if (seconds > 0 && Number.isInteger(seconds)) {
    const intervalID = setInterval(() => {
      seconds--;

      if (!seconds) {
        clearInterval(intervalID);
      }

      console.log(`Timer: ${seconds}`);
    }, 1000);
  }
}

countDown(5);
