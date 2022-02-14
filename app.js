const currentDisplayField = document.getElementById("main-display");
const previousDisplayField = document.getElementById("secondary-display");
const buttonsContainer = document.querySelector(".buttons-container");

buttonsContainer.addEventListener("click", (event) => {
    // number buttons
    if (event.target.classList.contains("number") && currentDisplayField.innerText.length < 8) 
    {
        if (
        (currentDisplayField.innerText == "" && event.target.value == 0) || 
        currentDisplayField.innerText.split("")[0] == 0
        ) {
            currentDisplayField.innerText = event.target.value;
        } else {
            currentDisplayField.innerText += event.target.value;
        }
    }
    // decimal button
    if (event.target.classList.contains("decimal") 
    && !currentDisplayField.innerText.includes(".")
    ) {
        currentDisplayField.innerText += event.target.value;
}

    // function buttons

    if (event.target.classList.contains("function")){
        const functions = event.target.value;
        switch (functions) {
            case "AC":
                currentDisplayField.innerText = ""; 
                previousDisplayField.innerText = "";
                break;
            case "±":
                if (!currentDisplayField.innerText.includes("-")) {   // eğer başında eksi yoksa
                    currentDisplayField.prepend("-");                 // eksi ekle
                } else {                                              // eksi varsa
                    currentDisplayField.innerText = currentDisplayField.innerText.slice(1); // eksi sil
    }
                break;
            case "%":
                if (currentDisplayField.innerText != "") {
                    currentDisplayField.innerText = currentDisplayField.innerText / 100;
                }
                break;
            case "back":
                if (currentDisplayField.innerText != "") {
                    currentDisplayField.innerText = currentDisplayField.innerText.slice(0, -1);
                }
        }};

        // operator buttons

        if (event.target.classList.contains("operator")) {
            const operator = event.target.value;
            switch (operator) {
                case "+":
                    if (currentDisplayField.innerText != "") {              // eğer currentDisplayField boş değilse
                        previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`; // previousDisplayField'a currentDisplayField'ın değeri ve + ekle `; 
                        currentDisplayField.innerText = "";   // currentDisplayField'ın içeriğini sil
        }
                    break;
                case "-":
                    if (currentDisplayField.innerText != "") {
                        previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
                        currentDisplayField.innerText = "";
                    }
                    break;
                case "x":
                    if (currentDisplayField.innerText != "") {
                        previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
                        currentDisplayField.innerText = "";
                    }
                    break;
                case "/":
                    if (currentDisplayField.innerText != "") {
                        previousDisplayField.innerText = `${currentDisplayField.innerText} ${operator}`;
                        currentDisplayField.innerText = "";
                    } 
                    break;
                case "=":
                    if (currentDisplayField.innerText != "") {

                        const currentNumber = Number(currentDisplayField.innerText);   // eğer + işareti var ise currentDisplayfieldı number'a çevirip bir değişkene atadık
                        const previousNumber = Number(previousDisplayField.innerText.split(" ")[0]); // eğer previousDisplayField boş değilse previousDisplayField'ın ilk değerini number'a çevirip bir değişkene atadık
                        
                        if (previousDisplayField.innerText.includes("+")) {
                            // number'ı almak için + ile split edip ilk değeri alıyoruz
                            if (currentNumber + previousNumber > 99999999) {
                                currentDisplayField.innerText = "Error";
                                previousDisplayField.innerText = "";
                            } else { 
                            currentDisplayField.innerText = previousNumber + currentNumber; // currentDisplayField'ın içeriğini previousDisplayField'ın ilk değerini ve currentDisplayField'ın içeriğini topluyoruz 
                            previousDisplayField.innerText = ""; // previousDisplayField'ın içeriğini sil
                        } }
                        if (previousDisplayField.innerText.includes("-")) {
                            currentDisplayField.innerText = previousNumber - currentNumber;
                            previousDisplayField.innerText = "";
                        }   

                        if (previousDisplayField.innerText.includes("x")) {
                            if (currentNumber * previousNumber > 99999999) {
                                currentDisplayField.innerText = "Error";
                                previousDisplayField.innerText = "";
                            } else {
                            currentDisplayField.innerText = previousNumber * currentNumber;
                            previousDisplayField.innerText = "";
                            }
                        }

                        if (previousDisplayField.innerText.includes("/")) {
                            if(currentNumber == 0) 
                            {currentDisplayField.innerText = "Error";
                        } else {
                            
                            const result = previousNumber / currentNumber;
                            currentDisplayField.innerText =  parseFloat(result).toFixed(2); 
                        }
                        previousDisplayField.innerText = "";
                        }
                    }
                    break;

                    default:
                        break;

}}});







