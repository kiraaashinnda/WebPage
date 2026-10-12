import pool from "../config/db.js"

export const getAllUser = async(req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users ORDER BY id ASC")
    return res.status(200).json({
      status: true,
      message: "Yaudah",
      total: rows.length,
      data: rows,
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
}

export const getUserById = async(req, res) => {
try{
const id = parseInt(req.params.id)
const [user] = await pool.query("SELECT id, nama, email, is_active FROM users WHERE id= ?", [id])
if (user.length === 0) {
  res.status(404).json({
    status: false,
    message: "Gada"
  })
}
res.status(200).json({
    status: true,
    message: "Ada",
    data: user
  })
} catch (error) {
  return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
}}

export const createUser = async (req, res) => {
  const {nama, email, password, is_active} = req.body
  
  try {
  const [user] = await pool.query("INSERT INTO users(nama,email,password,is_active) VALUES (?,?,?,?)", [nama, email, password, is_active]);
  
    return res.status(201).json({
      status: true,
      message: "ditambah",
      data: user
    })
  } catch(error){
      return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
}


export const updateUser = async(req, res) => {
  const id = parseInt(req.params.id);
  const { nama, email, password, is_active } = req.body;

  try {
  if (!password) {
    const [user] = await pool.query("UPDATE users SET nama=?, email=?, is_active=? WHERE id=?", [nama, email, is_active, id]);
    return res.status(200).json({
      status: true,
      message: "User berhasil diperbarui",
      data: user,
    });
  } else {
    const [user] = await pool.query("UPDATE users SET nama=?, email=?, password=?, is_active=? WHERE id=?", [nama, email, password, is_active, id]);
    return res.status(200).json({
      status: true,
      message: "User berhasil diperbarui",
      data: user,
    });
  }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
};

export const deleteUser = async(req,res) => {
  const id = parseInt(req.params.id)
  
  try {
    await pool.query("DELETE FROM users WHERE id=?", [id]);
    return res.status(200).json({
      status: true,
      message: "Dah diapus"
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
}