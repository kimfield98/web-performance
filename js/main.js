function showTopBar(){
    let country = "France";
    let vat = 20;
    setTimeout(() => {
        document.querySelector("section.country-bar")
        .innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`
        document.querySelector("section.country-bar")
        .classList.remove('hidden')
    }, 1000);
}



showTopBar();




