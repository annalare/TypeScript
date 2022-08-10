interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: "Larissa",
    email: "larissa@email.com",
  };
}
function setUser(usuario: Usuario) {}
