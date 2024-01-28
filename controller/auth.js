const User = require("../models/users");


const register = async (req, res, next) => {
  const { name, username, email, password, age } = req.body;
  console.log(req.body);

  try {
    // Check if age is greater than or equal to 18
    if (age >= 18) {
      const existingUsername = await User.findOne({ where: { username } });

      if (existingUsername) {
        // Redirect if username already exists
        res.redirect("/register");
        return;
      }
      await User.create({ name, email, password, username, age });
      res.redirect("/login");
    } else {
      res.send('<script>alert("Sorry, your age does not meet the requirements."); window.location.href = "/register";</script>');
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async(req,res) => {
  const {username, password} = req.body
  try {
    const user = await User.findOne({where: {username}})
    if(!user) {
      req.session.error = "Username not valid";
      res.redirect("/login")
    }
   
    if(user.username === username) {
       if(user.password === password) {
        req.session.user = {
          id: user.id,
          username: user.username,
          email: user.email,
        }
         res.redirect("/")
       } 
       req.session.error = "Username not valid";
       res.redirect("/login")
    } else {
      req.session.error = "Username not valid";
      res.redirect("/login")
    }
  } catch (error) {
    
  }
}

module.exports = {register, login};