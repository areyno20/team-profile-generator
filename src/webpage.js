const manager = managerData => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${managerData.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${managerData.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${managerData.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
                <li class="list-group-item">Office number: ${managerData.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};

const engineer = engineerData => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineerData.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineerData.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerData.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></li>
            </ul>
        </div>
    </div>
    `;
};

const intern = internData => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${internData.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${internData.getRole()}</h3>
            </div>
            <div class="card-body">
                <li class="list-group-item">ID: ${internData.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${internData.email}">${internData.email}</a></li>
                <li class="list-group-item">School: ${internData.school}</li>
            </ul>
        </div>
    </div>
    `;
};

const employees = employeesData => {
    let html = '';
    for (let i = 0; i < employeesData.length; i++) {
        if (employeesData[i].getRole() === 'Manager') {
            html += manager(employeesData[i]);
        } else if (employeesData[i].getRole() === 'Engineer') {
            html += engineer(employeesData[i]);
        } else if (employeesData[i].getRole() === 'Intern') {
            html += intern(employeesData[i]);
        }
    }
    return html;
};


const template = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${employees}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

module.exports = template;



            