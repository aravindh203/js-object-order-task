const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 72,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 24,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 63,
  },
     {
    id: 4,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 31,
  },
];

let a=[];
let b=[];

for(i=0;i<passengers.length;i++){
  a[i]=passengers[i].connectedFlights
}

for(i=0;i<a.length;i++){
  let c=Math.max(...a);
  a[a.indexOf(c)]=null;
  for(j=0;j<passengers.length;j++){
    if(passengers[j].connectedFlights==c){
      b[i]=passengers[j];
    }
  }
}
console.log(b)






  
  

