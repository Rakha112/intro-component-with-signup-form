const all_button = document.querySelector("button");
const button_submit = document.querySelector(".submit");
const email = document.querySelector("#email_address");
const input = document.querySelectorAll("input");
const label = document.querySelectorAll(".empty_label");
const label_wrong = document.querySelector("#email_wrong")

button_submit.addEventListener('click', e => {
    e.preventDefault();
    
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < label.length; j++)
        {
            if(input[i].value==="") {
                label_wrong.style.display = "none"
                input[i].classList.add("input_error")
                label[i].style.display = "inline"
                label[i].classList.add("error_label")
                
            }
            else {
                input[i].classList.remove("input_error")
                label[i].style.display = "none"
                label[i].classList.remove("error_label")
            }
            console.log(input[i].value)
            
        }
    }
    if(validateEmail(email.value)===false && email.value !== "") {
        label_wrong.classList.add("error_label")
        label_wrong.style.display = "inline"
        email.classList.add("input_error")
    }
    if (validateEmail(email.value)===true && email.value !== "") {
        label_wrong.classList.remove("error_label")
        label_wrong.style.display = "none"
        email.classList.remove("input_error")
    }
    // console.log(input)
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

