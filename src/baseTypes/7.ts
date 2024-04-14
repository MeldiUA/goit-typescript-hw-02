/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum  days  {
  Monday ,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday ,
}
function isWeekend(day:days){
  return day === days.Saturday || day === days.Sunday ? false : true;
}