const invaderContainer = document.getElementById('invaDiv');

function spaceyboi(){
    const invaBox = document.createElement('div');
    const invader = document.createElement('canvas');
    invader.className = 'space-invader';
    invaBox.style = 'width:70px; height:60px;'; 
    console.log('clicked');
    invaBox.append(invader);
    invaderContainer.append(invaBox);
}