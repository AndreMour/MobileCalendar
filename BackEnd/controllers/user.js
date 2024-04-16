import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM funcionarios";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao buscar os usuários.");
    }

    return res.status(200).json(data);
  })
};

export const getTeams = (_, res) => {
  const q = "SELECT * FROM limpeza";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao buscar as duplas.");
    }

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO funcionarios (`nome`) VALUES(?)";
  const values = [req.body.name];

  db.query(q, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao adicionar o usuário.");
    }

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM funcionarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao deletar o usuário.");
    }

    return res.status(200).json("Usuário deletado com sucesso.")
  })
}

export const saveTeams = (req, res) => {
  const teams = req.body.teams;
  let errors = [];

  const promises = teams.map(team => {
    return new Promise((resolve, reject) => {
      const deleteQuery = "DELETE FROM limpeza WHERE DATE(`data`) = DATE(?)";
      db.query(deleteQuery, [team[2]], (err) => {
        if (err) {
          console.error(err);
          errors.push(err);
          reject(err);
        } else {
          const insertQuery = "INSERT INTO limpeza (`funcionario1`, `funcionario2`, `data`) VALUES (?, ?, ?)";
          const values = [team[0], team[1] || null, team[2]];
          db.query(insertQuery, values, (err) => {
            if (err) {
              console.error(err);
              errors.push(err);
              reject(err);
            } else {
              resolve();
            }
          });
        }
      });
    });
  });

  Promise.all(promises)
    .then(() => {
      if (errors.length > 0) {
        return res.status(500).json("Ocorreram erros ao salvar as duplas: " + errors.join(", "));
      } else {
        return res.status(200).json("Duplas salvas com sucesso.");
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json("Ocorreu um erro ao salvar as duplas.");
    });
};

