document.getElementsByClassName('color-1')[0].style.backgroundColor = 'rgb(255,0,0)'
document.getElementsByClassName('color-2')[0].style.backgroundColor = 'rgb(0,255,0)'

let color1Input = document.getElementById("color1-input");
let color2Input = document.getElementById("color2-input");
let mixedColor = document.getElementById("color-result");

function parseRgb(rgb_string) {
  if (/\d{1,3},\d{1,3},\d{1,3}/.test(rgb_string)) {
    let color = JSON.parse("[" + rgb_string + "]");
    return color;
  } else {
    return false;
  }}

//colorChannelA and colorChannelB are ints ranging from 0 to 255
function colorChannelMixer(colorChannelA, colorChannelB, amountToMix){
    let channelA = colorChannelA*amountToMix;
    let channelB = colorChannelB*(1-amountToMix);
    return parseInt(channelA+channelB);
}
  
//rgbA and rgbB are arrays, amountToMix ranges from 0.0 to 1.0
//example (red): rgbA = [255,0,0]
function colorMixer(rgbA, rgbB, amountToMix){
    let r = colorChannelMixer(rgbA[0],rgbB[0],amountToMix);
    let g = colorChannelMixer(rgbA[1],rgbB[1],amountToMix);
    let b = colorChannelMixer(rgbA[2],rgbB[2],amountToMix);
    return `rgb(${r},${g},${b})`;
}

document.addEventListener('input', (event) => {
  if (parseRgb(event.target.value))
  {
  if (event.target.id === 'color1-input') {
    console.log('first color')
  } else if (event.target.id === 'color2-input') {
    console.log('second color')
  }}
      let color1 = parseRgb(document.getElementById('color1-input').value)
    let color2 = parseRgb(document.getElementById('color2-input').value)
    let newColor = colorMixer(color1, color2, 0.5)
    mixedColor.style.backgroundColor = newColor;
}
})

document.addEventListener('input', (event) => {
  if (parseRgb(event.target.value))
  {
    if (parseRgb(color1Input))
    {
      console.log("1")
    }
    let color1 = parseRgb(document.getElementById('color1-input').value)
    let color2 = parseRgb(document.getElementById('color2-input').value)
    let newColor = colorMixer(color1, color2, 0.5)
    mixedColor.style.backgroundColor = newColor;
}
})