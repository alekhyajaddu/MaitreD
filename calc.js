function calc()
{
    let Total=parseFloat(document.querySelector('#total-field').value)
    let Rate=parseFloat(document.querySelector('#rate-field').value)

    console.log(Rate);

    let Tip=Total*(Rate/100)
    let TaxRate=5.5
   // let Tax=Total*(TaxRate/100)
    let GrandTotal=Total+Tip+TaxRate

    document.querySelector('#Tip').innerHTML= Tip
    document.querySelector('#Tax').innerHTML= TaxRate
    document.querySelector('#GrandTotal').innerHTML= GrandTotal
}
//document.querySelector('#calc-button').addEventListener('click',calc)
