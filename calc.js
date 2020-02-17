function calc()
{
    const Total=parseFloat(document.querySelector('#total-field').value)
    const Rate=parseFloat(document.querySelector('#rate-field').value)

    console.log(Rate);

    const Tip=Total*(Rate/100)
    const TaxRate=5.5
    const Tax=Total*(TaxRate/100)
    const GrandTotal=Total+Tip+Tax

    document.querySelector('#Tip').innerHTML= Tip
    document.querySelector('#Tax').innerHTML= TaxRate
    document.querySelector('#GrandTotal').innerHTML= GrandTotal
}
