const CooperativeModel = require("../models/users").datos.users;


class CooperativeController {
  addCooperative(req, res) {
    let UsuarioID = req.params.id;
    let nuevaCooperativa = req.body;
    const user = CooperativeModel.find((user) => user.id == UsuarioID);

    if (user) {
     user.cooperativas.push(nuevaCooperativa);
      console.log(nuevaCooperativa);
      
      return res.send(CooperativeModel);
    } else {
      return res.send("No se encontró");
    }
  }

  deleteUserFromCooperative(req, res) {
    const id = req.params.id; // Convertir a entero
    const cooperativaID = req.params.coop; // Convertir a entero

    // Buscar el usuario por su id
    const usuario = CooperativeModel.find((user) => user.id == id);
    if (usuario) {
      // Buscar la cuenta por su id dentro de las cuentas del usuario
      const cooperativaIndex = usuario.cooperativas.findIndex(
        (coop) => coop.id == cooperativaID
      );
      if (cooperativaIndex !== -1) {
        // Eliminar la cuenta encontrada
        usuario.cooperativas.splice(cooperativaIndex, 1);
        res.send(CooperativeModel);
        return;
      }
    }
    res.status(404).send("Usuario o cuenta no encontrados");
  }

  deleteCooperative(req, res) {
    const { id } = req.params;
    const success = CooperativeModel.deleteCooperative(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send("Cooperative not found");
    }
  }

  addMember(req, res) {
    const { cooperativeId, userId } = req.body;
    const updatedCooperative = CooperativeModel.addMember(
      cooperativeId,
      userId
    );
    if (updatedCooperative) {
      res.status(200).json(updatedCooperative);
    } else {
      res.status(404).send("Cooperative or user not found");
    }
  }

  removeMember(req, res) {
    const { cooperativeId, userId } = req.body;
    const updatedCooperative = CooperativeModel.removeMember(
      cooperativeId,
      userId
    );
    if (updatedCooperative) {
      res.status(200).json(updatedCooperative);
    } else {
      res.status(404).send("Cooperative or user not found");
    }
  }
}

module.exports = new CooperativeController();
