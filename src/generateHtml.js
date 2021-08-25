// function to create team cards dynamically

const createTeam = (team) => {
  console.log({ team });
  //create manager card

  const createManager = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item">${manager.getEmail()}</li>
            <li class="list-group-item">${manager.getofficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
  };
  //create engineer card
  const createEngineer = (engineer) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">${engineer.getId()}</li>
            <li class="list-group-item">${engineer.getEmail()}</li>
            <li class="list-group-item">${engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `;
  };
  //create intern card
  const createIntern = (intern) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">${intern.getId()}</li>
            <li class="list-group-item">${intern.getEmail()}</li>
            <li class="list-group-item">${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
  };
  //empty array for cards to populate
  const cards = [];
  //filter info for cards
  cards.push(
    team
      .filter((emp) => emp.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  cards.push(
    team
      .filter((emp) => emp.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  cards.push(
    team
      .filter((emp) => emp.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );
  // return cards
  return cards.join("");
};
//export module
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid">
<div class="row">
<div class="col-12 jumbotron mb-3 team-heading bg-info">
<h1 class="text-center text-white">My Team</h1>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="team-area col-12 d-flex justify-content-center">
${createTeam(team)}
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>    
</body>
</html>
`;
};
// ${cards}
// createTeam();
