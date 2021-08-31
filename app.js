const outputResult1 = document.getElementById("output1")
const outputResult2 = document.getElementById("output2")


function Calculate() {
    let salary = parseInt(document.getElementById("input1").value);
    let year = (document.getElementById("input2").value);

    let bonus = 0.0;


    if (salary > 0 && year == 5) {
        bonus = salary * 0.1

    } else if (salary > 0 && year == 10) {
        bonus = salary * 0.5

    } else if (salary > 0 && year == 20) {
        bonus = salary * 1

    }

    else {
        alert('Iltimos bo`sh joylarni to`ldiring!')
    }
    outputResult1.value = "" + bonus;
    let result = salary + bonus;
    outputResult2.value = "" + result;

}


