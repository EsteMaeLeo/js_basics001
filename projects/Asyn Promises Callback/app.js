//callbacks
const countries = ['Spain', 'USA', 'Cuba', 'Croatia', 'Egipt','Japan'];

function showCountries(){
    setTimeout(() =>{
        countries.forEach(country =>{
            console.log(country)
        })
    },1000)
}

showCountries();