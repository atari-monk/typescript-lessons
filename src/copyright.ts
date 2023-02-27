namespace copyright {
  //original js code
  // const year = document.getElementById("year");
  // const thisYear = new Date().getFullYear();
  // year.setAttribute("datetime", thisYear);
  // year.textContent = thisYear;

  // variation 1
  // let year: HTMLElement | null;
  // year = document.getElementById("year");
  // let thisYear: string;
  // thisYear = new Date().getFullYear().toString();
  // if (year) {
  //   year.setAttribute("datetime", thisYear);
  //   year.textContent = thisYear;
  // }

  // variation 2
  const year = document.getElementById("year") as HTMLElement;
  const thisYear: string = new Date().getFullYear().toString();
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}
