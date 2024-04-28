module.exports = async (req, res, next) => {
    try {
      const tokenData = req.tokenData;
      const roles = tokenData.realm_access.roles;
      // roles would return an array of strings
  
      const isUser = roles.includes("client_user");

      if(!isUser){
         // Throw error if user is not an admin
         const error = new Error("Access Denied: You do not have permission to access this resource.");
         error.statusCode = 401;
         throw error;
      }
  
      if (isUser) {
        next();
      } else {
        // Throw error if user is not an admin
        const error = new Error("Access Denied: You do not have permission to access this resource.");
        error.statusCode = 401;
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }