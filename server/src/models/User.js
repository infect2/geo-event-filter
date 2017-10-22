module.exports = (sqeulize, DataTypes) => 
  sqeulize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })