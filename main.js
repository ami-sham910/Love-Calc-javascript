function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const background = document.getElementsByClassName("container");

    if (name1 === "" || name2 === "") {
        alert("Enter Both Name")
    }
    else {
        const lovepercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
       
        result.innerHTML = `${name1} and ${name2} 's Love Percrntage: ${lovepercentage} `



        if(lovepercentage <30){
            result.innerHTML = `<br> Not A Great Match. Looking! Your Love Percatege": ${lovepercentage} `
            


        }
        else if(lovepercentage>=30 && lovepercentage<70) {
            result.innerHTML =`<br> well Done Your Love Percantage ${lovepercentages}`
            // result.innerHTML = '$ {lovepercentage}'
        }
        else{
            result.innerHTML ="Try Agains"
        }
    }

}