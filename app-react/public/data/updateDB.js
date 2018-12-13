const adminData = require ('./admin-data.json');
// import devData from './dev-data.json';
// import entData from './ent-data.json';
// import projectData from './projectdata.json';

const axios = require ('axios');


const data = {
  adminData: adminData
}

console.log(data)

function updateAdmin() {
  data.adminData.map(item =>  { 
    const { name, email, password } = item;
    axios
      .post("http://localhost:5000/api/projects", {
        name,
        email,
        password
      })
      .then(() => {
        console.log('ok');
      })
      .catch(error => console.log(error))
  })
}

updateAdmin();

// const { title, category, date, description } = this.state;
//     axios
//       .post("http://localhost:5000/api/projects", {
//         title,
//         category,
//         date,
//         description
//       })
//       .then(() => {
//         this.setState({ title: "", category: "", date: "", description: "" });
//       })
//       .catch(error => console.log(error));