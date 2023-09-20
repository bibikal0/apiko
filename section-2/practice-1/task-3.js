function printSeasonByMonth(month) {
  switch (month) {
    case "DECEMBER":
    case "JANUARY":
    case "FEBRUARY":
      console.log("WINTER");
      break;
    case "SEPTEMBER":
    case "OCTOBER":
    case "NOVEMBER":
      console.log("AUTUMN");
      break;
    case "MARCH":
    case "APRIL":
    case "MAY":
      console.log("SPRING");
      break;
    case "JUNE":
    case "JULY":
    case "AUGUST":
      console.log("SUMMER");
  }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
