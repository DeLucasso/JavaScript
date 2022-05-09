// The Switch statement compares expression to each case. If no case is equal to expression, then <default> clause is executed.
// Difference between IF ELSE and SWITCH is, that IF ELSE evaluates expression and logic

var expression = "Lemonade";

switch (expression) {

    case "Beer":
        console.log("expression = Beer")
        break;
        
    case "Juice":
    console.log("expression = Juice!")
        break;

            case "Lemonade":
    console.log("expression = Lemonade!")
        break;
    
    default:    
    console.log("Err! none of the case is equal to expression");
}
