const btnSwitch = document.querySelector('#switch input')

const priceBasic = document.querySelector('#price-basic h1')
const priceProfessional = document.querySelector('#price-profissional h1')
const priceMaster = document.querySelector('#price-master h1')

const valoresM = [19.99, 24.99, 39.99]
const valoresA = [199.99, 249.99, 399.99]

priceBasic.innerHTML = `$${valoresA[0]}`;
priceProfessional.innerHTML = `$${valoresA[1]}`;
priceMaster.innerHTML = `$${valoresA[2]}`;


btnSwitch.addEventListener('click', function(){
    if(priceBasic.innerHTML === `$${valoresA[0]}` && priceProfessional.innerHTML === `$${valoresA[1]}` && priceMaster.innerHTML === `$${valoresA[2]}`)
    {
        
        priceBasic.innerHTML = `$${valoresM[0]}`;
        priceProfessional.innerHTML = `$${valoresM[1]}`;
        priceMaster.innerHTML = `$${valoresM[2]}`;
    } else{
        priceBasic.innerHTML = `$${valoresA[0]}`;
        priceProfessional.innerHTML = `$${valoresA[1]}`;
        priceMaster.innerHTML = `$${valoresA[2]}`;
    }
})
