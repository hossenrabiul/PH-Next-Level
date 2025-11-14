interface Developer<T, X = null> {
  name : string,
  salary : number,
  device : {
    brand : string,
    model : string,
    releasedDate : string,
  },
  smartWatch : T,
  bike? : X,
}

const poorDev : Developer<{heartBite : string}, string> = {
  name : 'Me',
  salary : 2000,
  device : {
    brand : 'lenovo',
    model : "A03",
    releasedDate : "2040"
  },
  smartWatch : {
    heartBite : "200",
  },
  bike : "Auto",
}


const richDev : Developer<{
  aiFeatured : string,
}, number> = {
  name : 'Me',
  salary : 2000,
  device : {
    brand : 'lenovo',
    model : "A03",
    releasedDate : "2040"
  },
  smartWatch : {
    aiFeatured : "has ai features",
  },
  bike : 3020,
}


