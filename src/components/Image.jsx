import React from 'react'

export default function Image() {

    
    function zoomin(){
        var myImg = document.getElementById("barcelona");
        var currWidth = myImg.clientWidth;
        if(currWidth === 500){
            alert("Maximum zoom-in level reached.");
        } else{
            myImg.style.width = (currWidth + 50) + "px";
        } 
    }
    function zoomout() {
        var myImg = document.getElementById("barcelona");
        var currWidth = myImg.clientWidth;
        if(currWidth === 50){
            alert("Maximum zoom-out level reached.");
        } else{
            myImg.style.width = (currWidth - 50) + "px";
        }
    }
    
    function addImg() {
        let image = document.getElementById("barcelona")
        image.style.display = 'block';
    }
    
    function deleteImg() {
        let image = document.getElementById("barcelona");
        image.style.display = "none";
    }

    return <div>
        <a href="https://www.barcelona.cat/en/">
            <img id="barcelona" width="400" src="https://images.unsplash.com/photo-1587789202069-f57c846b85db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hJTIwY2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
        </a>
        <div>
            <button onClick={addImg}>Додати</button>
            <button onClick={zoomin}>Збільшити</button>
            <button onClick={zoomout}>Зменшити</button>
            <button onClick={deleteImg}>Видалити</button>
        </div>
    </div>
}