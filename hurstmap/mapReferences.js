

/*
 * GPS reference points.
 */
 

//hurst map
let ref1 = 
{
    x: 281,
    y: 450,
    latitude: 51.73533848,
    longitude: -1.317214914
};

let ref2 = 
{
    x: 1468,
    y: 27,
    latitude: 51.737295052,
    longitude: -1.30823373537
};
 
if (MAP === "cumnor3")
{
  //cumnor3.jpg
  ref1 = 
  {
      x: 382,
      y: 2006,
      latitude: 51.724002,
      longitude: -1.3643989
  };

  ref2 = 
  {
      x: 1320,
      y: 126,
      latitude: 51.759804,
      longitude: -1.3349187
  };
}
else if (MAP === "spurr")
{
  ref1 = 
  {
      x: 80,
      y: 24,
      latitude: 51.267216,
      longitude: -0.55369174
  };

  ref2 = 
  {
      x: 1615,
      y: 1047,
      latitude: 51.248699,
      longitude: -0.51128712
  };
}


