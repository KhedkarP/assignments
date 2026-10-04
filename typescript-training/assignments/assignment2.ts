//Assignment-2 (Conditional Statements)
let customerName:string = "John Doe";
let creditScore:number = 720;
let income:number = 55000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35.0;


applyForLoan(customerName,creditScore,income,isEmployed,debtToIncomeRatio)

function applyForLoan(customerName:string,creditScore:number,income:number,isEmployed:boolean,debtToIncomeRatio:number){
if(creditScore!=null || undefined){
    switch (creditScore>0){
        case creditScore>=750 :
            console.log(`${customerName}, Your loan is approved `);
                break;
        case (creditScore >= 650 && creditScore < 750 && isEmployed && debtToIncomeRatio<=40 && income>=50000):
            console.log(`${customerName}, Your loan is approved after checks`);
                break;
        default :
            console.log(`${customerName}, you are not elegible for loan`);
                break;
        }
    }
}