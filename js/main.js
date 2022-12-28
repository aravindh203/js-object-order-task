const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];
let a=[];
let b=0;
let length=passengers.length
  for(i=length;i>0;i--){
    for(j=0;j<length;j++){
      if(passengers[j].connectedFlights==i){
        a[b]=passengers[j].passengerName;
        b++;
      }
    }
  }
  console.log(a);


  
  

