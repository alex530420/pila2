// Actions methods

// GET /project/projects
//  GET /project/dashboard

const showDashboard = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION '/project/projects' '/project/dashboar'  🚧");
};

// GET /project/add-form
// GET /project/add
const addForm = (req, res) => {
  res.render('project/addView');
};

// Controlador Home
export default {
  showDashboard,
  addForm,
};
