 function addUser()
  {
      player1_name = document.getElementById("player1_name_input").var;
  player2_name = document.getElementById("player2_name_input").var;
  
  localStorage.getItem("player1_name_input", player1_name_input);
  localStorage.getItem("player2_name_input", player2_name_input);
  
  window.location = "game_login.html";
  }