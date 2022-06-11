const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(winningYear){
  let result = winningYear.find ((record) =>
  record.result === "W" ? record.year : undefined 
  );
  return result !== undefined? result.year : undefined;
}
