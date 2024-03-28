"use strict";

let R = null;
let chart = null;
let tbl2 = null;


let b1 = document.querySelector("#b1");

async function sc() {
    let url = `https://juxinglong.github.io/static/data/states.json`;
    let r = await fetch(url);
    let rj = await r.json();

    //get container
    let cc = document.querySelector("#cc");
    let opts = {
        type: "pie", //can also be line or bar
        data: {
            labels:rj.map(x=>x.st),
            datasets: [{
                data: rj.map(x => x.p),
                label:"Population",
            },],
        },
    };
    if (chart != null)
    {
        chart.destroy();
    }
    cc.innerHTML = ``;


    chart = new Chart(cc, opts);

    //show table
    //rj'
    let sdiv = document.querySelector("#sdiv");

    let p = {
        data: rj,
        pagination: { limit: 5 },
        search: true,
        sort: true,
        columns: [{ id: "st", name: "STATE" }, {id:"p",name:"POPULATION"},],
    };
    if (tbl != null) {
        tbl2.destroy();

    }
    sdiv.innerHTML = ``;
    tbl2 = new gridjs.Grid(p);
    tbl2.render(sdiv);


    console.log(rj);
    R = rj;

    fetch(url);// async
 
    //fetch()
    //Swal.fire( "Ok" );
}

b1.addEventListener("click", sc);
