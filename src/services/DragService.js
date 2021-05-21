export const fetchQueens = async (page) => {
  const res = await fetch(
    `http://www.nokeynoshade.party/api/queens/all/?page=${page}`
  );
  const json = await res.json();

  return json.map((queen) => ({
    id: queen.id,
    name: queen.name,
    winner: queen.winner,
    image: queen.image_url
  }));
};

export const fetchQueenById = async (id) => {
  const res = await fetch(`http://www.nokeynoshade.party/api/queens/${id}`);
  const queen = await res.json();

  return {
    id: queen.id,
    name: queen.name,
    winner: queen.winner,
    MissCongeniality: queen.missCongeniality,
    image: queen.image_url,
    quote: queen.quote
  };
};
