const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
        
let lastChecked;
let inBetween = false;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        checkboxs.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("started here")
            }

            if (inBetween) {
                checkbox.checked =  true;
            }
        });
    }
    
    lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
