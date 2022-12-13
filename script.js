function toggle_midea(){
    let midea1 = document.querySelector("#midea1");
    let midea2 = document.querySelector("#midea2");

    if(midea1.style.display != 'none'){
        midea1.style.display = 'none';
        midea2.style.display = 'inline';
    } else{
        midea1.style.display = 'inline';
        midea2.style.display = 'none';
    }
}