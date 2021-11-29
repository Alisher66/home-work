let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Dasha"}
  ];
  
  let user = users.filter(item => item.id == 1);
  
  console.log(user); // Вася