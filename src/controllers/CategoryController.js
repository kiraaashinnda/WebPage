import pool from "../config/db.js"

export const getAllCategories = async(req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM kategori ORDER BY id ASC")
    return res.status(200).json({
      status: true,
      total: rows.length,
      message: "untung ga typo",
      data: rows,
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "wkwkwkwk",
      error: error.message
    })
  }
}

export const getCatID = async(req, res) => {
try{
const id = parseInt(req.params.id)
const [kategori] = await pool.query("SELECT * FROM kategori WHERE id= ?", [id])
const rows = kategori [0]
if (!rows) {
  res.status(404).json({
    status: false,
    message: "Gada"
  })
}
res.status(200).json({
    status: true,
    message: "Ada",
    data: kategori
  })
} catch (error) {
  return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
}}

export const createCat = async (req, res) => {
  const {nama} = req.body
  if(!nama) {
    return res.status(400).json({
      status: false,
      message: "wkwkwk gajelas",
    })
  }
  try {
  const [kategori] = await pool.query("INSERT INTO kategori(nama) VALUES (?)", [nama]);
  
    return res.status(201).json({
      status: true,
      message: "ditambah",
      data: kategori
    })
  } catch(error){
      if (error.code === "ER_DUP_ENTRY")
      {
        return res.status(400).json({
          status: false,
          message: "wkwkwk mabok",
        })
      }

      return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
}

export const updateCat = async(req, res) => {
  const id = parseInt(req.params.id);
  const {nama} = req.body;
  
  try {
    const [cat] = await pool.query("UPDATE kategori SET nama=? WHERE id=?", [nama, id]);
    if (cat.affectedRows === 0) {
      res.status(404).json({
      status: false,
      message: "Gada"
      })
    }
    return res.status(200).json({
      status: true,
      message: "Kategori telah ditambah",
      data: cat,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
};

export const deleteCat = async(req,res) => {
  const id = parseInt(req.params.id)
  
  try {
    await pool.query("DELETE FROM kategori WHERE id=?", [id]);
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