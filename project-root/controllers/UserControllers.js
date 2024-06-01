const UserModel = require("../models/users").datos.users;

class UserController {
  addUser(req, res) {
    let nuevoUsuario = req.body;
    UserModel.push(nuevoUsuario);
    res.send(UserModel);
  }

  editUser(req, res) {
    const usuarioActualizado = req.body;
    const id = req.params.id;

    const indice = UserModel.findIndex((usuario) => usuario.id == id);

    if (indice >= 0) {
      UserModel[indice] = usuarioActualizado;
    }
    res.send(UserModel);
  }

  addUserAccount(req, res){
    
      let UsuarioID = req.params.id;
      let nuevaCuenta = req.body;
      const user = UserModel.find((user) => user.id == UsuarioID);

      if (user) {
        user.cuentas.push(nuevaCuenta);
        return res.send(UserModel);
      } else {
        return res.send("No se encontró");
      }
    
  }

  deleteUser(req, res) {
    const id = req.params.id;
    const indice = UserModel.findIndex((usuario) => usuario.id == id);

    if (indice >= 0) {
      UserModel.splice(indice, 1);
    }
    res.send(UserModel);
  }

  deleteUserAccount(req, res) {
    const id = parseInt(req.params.id); // Convertir a entero
    const cuentaId = parseInt(req.params.cuenta); // Convertir a entero

    // Buscar el usuario por su id
    const usuario = UserModel.find((user) => user.id == id);
    if (usuario) {
      // Buscar la cuenta por su id dentro de las cuentas del usuario
      const cuentaIndex = usuario.cuentas.findIndex(
        (cuenta) => cuenta.id === cuentaId
      );
      if (cuentaIndex !== -1) {
        // Eliminar la cuenta encontrada
        usuario.cuentas.splice(cuentaIndex, 1);
        res.send(UserModel);
        return;
      }
    }
    res.status(404).send("Usuario o cuenta no encontrados");
  }
  // Obtener todos los usuarios.
  getUsers(req, res) {
    console.log(UserModel);
    return res.render("users", { datos: UserModel });
  }

  // Obtener un usuario por su ID.
  getUserById(req, res) {
    const id = req.params.id;
    const resultado = UserModel.find((usuario) => usuario.id == id);

    if (!resultado) {
      console.log(`No se encontró el usuario con el id ${id}`);
      return res.render("users");
    }
    res.render("users", { user: resultado });
  }
}

module.exports = new UserController();
