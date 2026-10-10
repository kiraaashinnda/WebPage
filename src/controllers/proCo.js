import pool from "../config/db.js"

export const getAllPro = async(req, res) => {
  try {
    const [eak] = await pool.query("SELECT prodak.*, kategori.nama AS kategori_nama FROM prodak LEFT JOIN kategori ON prodak.c_id = kategori.id")
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
const [p] = await pool.query("SELECT prodak.*, kategori.nama AS kategori_nama FROM prodak LEFT JOIN kategori ON prodak.c_id = kategori.id WHERE prodak.id=?", [id])
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