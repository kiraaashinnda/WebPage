const USERS = [
  {
    id: 1,
    nama: "Reza",
    email: "s@gmail.com",
    password: "1122",
  },
];

export const login = (req, res) => {
  const { email, password } = req.body;

  // Cek input kosong
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Belum isi email atau password",
    });
  }

  // Cari user
  const user = USERS.find(
    (u) => u.email === email && u.password === password
  );

  // Kalau user tidak ditemukan
  if (!user) {
    return res.status(401).json({
      status: false,
      message: "Email atau password salah",
    });
  }

  // Login berhasil
  return res.status(200).json({
    status: true,
    message: "Login berhasil",
    data: {
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
      },
      token: `jwt-token-6969-${user.id}-${Date.now()}`,
    },
  });
};  