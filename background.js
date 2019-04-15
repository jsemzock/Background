function getRandomRgb() 
            {
                var num = Math.round(0xffffff * Math.random());
                var r = num >> 16;
                var g = num >> 8 & 255;
                var b = num & 255;
            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
            }

            for (var i = 0; i < 10; i++) {
                console.log(getRandomRgb());
            }

function clicker(x)
{
x.style.backgroundColor = getRandomRgb();
//document.getElementById(x).style.backgroundColor = getRandomRgb();
//console.log('Hover')
            }

            function changer(x)
{
x.style.backgroundColor = getRandomRgb();

            }