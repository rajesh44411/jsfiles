const image_array=['v2.jpg','v3.jpg','menf.jpg','a.jpg','b.jpg','d.jpg'];
let array_length=image_array.length;
let i=0;
let set=setInterval(slider,5000);
function slider(){
    i++;
    i=i%array_length;
    document.getElementById('image').src=`images/${image_array[i]}`
}

function next(){
    i++;
    i=i%array_length;
    document.getElementById('image').src=`images/${image_array[i]}`
}
function prev(){
     i--;
     if(i<0)
        i=array_length-1;
     document.getElementById('image').src=`images/${image_array[i]}`

}
function stop(){
    clearInterval(set);
}
function start(){
    set=setInterval(slider,2000);
}