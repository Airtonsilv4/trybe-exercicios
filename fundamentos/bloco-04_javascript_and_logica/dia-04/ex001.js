let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// console.log("Bem-vinda, " + info.personagem + "!");

info.recorrente = "Sim"

let infoDois = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

// for (key in info){
//   console.log(info[key]);
// }
// for (key in infoDois){
//   console.log(infoDois[key]);
// }

for(key in info){
  if (key === "recorrente" && info.recorrente === "Sim" && infoDois.recorrente === "Sim") {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[key] + " e " + infoDois[key]);
  }
}


