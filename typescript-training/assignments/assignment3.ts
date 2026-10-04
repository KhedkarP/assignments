
let students: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
let total: number = 0;

// Add 10 marks to each student
for (let i = 0; i < marks.length; i++) {
    let mark: number = marks[i] as number;
    mark += 10;
    updatedMarks.push(mark);
}

for (let mark of updatedMarks) {
    total += mark;
}

let average: number = total / 3;

console.log("Updated Marks : ");
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]}: ${updatedMarks[i]}`);
}

console.log("Average Marks : ", average);