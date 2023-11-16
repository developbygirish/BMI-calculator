let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let form = document.querySelector('form');
let bmival = document.querySelector('.bmival');
let condition = document.querySelector('.cond_field');
let condEl = document.querySelector('.cond_field .condition');

form.onsubmit = e => {
    e.preventDefault();
    if (height.value === '') {
        alert('Please Enter Your Height')
        return false;
    }
    else if (weight.value === '') {
        alert('Please Enter Your Weight')
        return false;
    }

    else {
        let bmiFormula = (weight.value) / (height.value * height.value);
        bmival.textContent = parseFloat(bmiFormula.toFixed(2));

        let cond;
        if(bmiFormula<18.5){
            cond='Under Weight';
            
        }
        else if(bmiFormula>18.5 && bmiFormula<24.9){
            cond='Normal Weight';
            
        }
        else if(bmiFormula>24.9 && bmiFormula<29.9){
            cond='Over Weight';
            
        }
        else if( bmiFormula>29.9){
            cond='Obesity';
            
        }

        condition.innerHTML = `<p>Condition : </p>
<p class="condition">
    ${cond}
</p>`
    }

    return true;
}