const leftrow=[
[0 , 0, 0, 0, 0, 0],
[0 , 0, 0, 0, 0, 0],
[0 , 0, 0, 0, 0, 0],
[0 , 0, 0, 0, 0, 0],
[0 , 0, 0, 0, 0, 0]
];
const Rightrow=[
    [0 , 0, 0, 0, 0, 0],
    [0 , 0, 0, 0, 0, 0],
    [0 , 0, 0, 0, 0, 0],
    [0 , 0, 0, 0, 0, 0],
    [0 , 0, 0, 0, 0, 0]
    ];


    const left = document.querySelector("#leftrow");
    const Right = document.querySelector("#Rightrow");


leftrow.map((e,i)=>{
    e.map((el,ind)=>{
        let div = document.createElement("div")
        div.innerText="L"+(ind+(6*i)+1);
        div.addEventListener("click",()=>{
            leftrow[i][ind]=1;
            div.classList.add("red");
        })
        left.append(div)
    });
});
// for(i=0;i<leftrow.length;i++){
//     for(j=0;j<leftrow[i].length;j++){
//     console.log(leftrow[i][j]);
//     }
// }
Rightrow.map((e,i)=>{
    e.map((el,ind)=>{
        let div = document.createElement("div")
        div.innerText="R"+(ind+(6*i)+1);
        div.addEventListener("click",()=>{
            Rightrow[i][ind]=1;
            div.classList.add("red");
        })
        Right.append(div)
    });
});