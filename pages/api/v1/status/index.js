function status(request, response) {
  response.status(200).json({ chave: "São Paulo" });
}

export default status;
