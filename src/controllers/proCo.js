import pool from "../config/db.js"

export const getAllPro = async(req, res) => {
  try {
    const [eak] = await pool.query("SELECT prodak.*, kategori.nama AS cat FROM prodak LEFT JOIN kategori ON prodak.c_id = kategori.id")
    return res.status(200).json({
      status: true,
      total: eak.length,
      message: "untung ga typo",
      data: eak,
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "wkwkwkwk",
      error: error.message
    })
  }
}

export const getProID = async(req, res) => {
try{
const id = parseInt(req.params.id)
const [p] = await pool.query("SELECT prodak.*, kategori.nama AS cat FROM prodak LEFT JOIN kategori ON prodak.c_id = kategori.id WHERE prodak.id=?", [id])
const rows = p [0]
if (!rows) {
  res.status(404).json({
    status: false,
    message: "Gada"
  })
}
res.status(200).json({
    status: true,
    message: "Ada",
    data: p
  })
} catch (error) {
  return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
}}

export const createP = async (req, res) => {
  const {c_id, nama, stock, harga, skripsi} = req.body
  if(!c_id || !nama || !stock || !harga || !skripsi) {
    return res.status(400).json({
      status: false,
      message: "wkwkwk",
    })
  }
  try {
  const [huhuhaha] = await pool.query("INSERT INTO prodak(c_id, nama, stock, harga, skripsi) VALUES (?,?,?,?,?)", [c_id, nama, stock, harga, skripsi]);
  
    return res.status(201).json({
      status: true,
      message: "Nambah cuan wir",
      data: huhuhaha
    })
  } catch(error){
      if (error.code === "ER_DUP_ENTRY")
      {
        return res.status(400).json({
          status: false,
          message: "wkwkwk dah ada wei",
        })
      }

      return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
}

export const upP = async(req, res) => {
  const id = parseInt(req.params.id);
  const {c_id, nama, stock, aktip, harga, skripsi} = req.body;
  
  try {
    const [prow] = await pool.query("UPDATE prodak SET c_id=?, nama=?, stock=?, aktip=?, harga=?, skripsi=? WHERE prodak.id=?", [c_id, nama, stock, aktip, harga, skripsi, id]);
    if (prow.affectedRows === 0) {
      res.status(404).json({
      status: false,
      message: "Gada wkwkw"
      })
    }
    return res.status(200).json({
      status: true,
      message: "Produk nambah cuan harusnya.....",
      data: prow,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal",
      error: error.message
    })
  }
};

export const delP = async(req,res) => {
  const id = parseInt(req.params.id)
  
  try {
    await pool.query("DELETE FROM prodak WHERE id=?", [id]);
    return res.status(200).json({
      status: true,
      message: "Duh ko diapus jir"
    })
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "gagal apus",
      error: error.message
    })
  }
}