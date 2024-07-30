

const form = document.getElementById("form1")
const errorf = document.getElementById("error")
const locationf = document.getElementById("location")
const forcastf = document.getElementById("forcast")
const longtitude = document.getElementById("longtitude")
const laititude = document.getElementById("laititude")

form.addEventListener('submit', (x) => {
    x.preventDefault()
    weatherfunction()
    form.reset()
})



let weatherfunction = async() => {
    try {
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address=' + address)
        const data = await res.json()
        console.log(data)
        if (data.error) {
            errorf.innerText = `ERROR : ${data.error}`
            locationf.innerText = ""
            longtitude.innerText = ""
            laititude.innerText = ""
            forcastf.innerText = ""
        } else {
            setTimeout(() => {
                locationf.innerText = `Country : ${data.location}` 
            },2000)
            setTimeout(()=>{
                longtitude.innerText = `Longtitude : ${data.longtitude}`
            },2500)
            setTimeout(() => {
                laititude.innerText = `Laititude : ${data.laititude}`
            },3000)
            setTimeout(() => {
                forcastf.innerText = `Forecast  : ${data.forcast}`
            },3500)
            errorf.innerText = ""
        }
    }

    catch(e) {
        console.log(e)
    }
}