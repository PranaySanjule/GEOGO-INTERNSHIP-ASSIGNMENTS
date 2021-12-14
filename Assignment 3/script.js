// var button = document.querySelector('.button')
let input = document.querySelector('input')

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        $(document).ready(function () {
                $.ajax({
                    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=23eaef90bfa9692610b20876cc73df75&units=metric'
                }).done(function (data) {
                    console.log(data);
                    $(".cityname").html(data.name)
                    $(".country").html(data.sys.country)
                    $(".tmp").html(data.main.temp)
                    $(".status").html(data['weather'][0]['description'])
                    $(".speed").html(data.wind.speed)
            
                });
        });       

    }
})
