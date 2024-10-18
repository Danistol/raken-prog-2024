const cats = [
  {
    id: "f1aa78f7-5812-4746-9dae-0b5286dcc760",
    name: "Kiisu",
    createdAt: 1728298557688,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "7ca823d0-c2d6-46a7-b31c-531e16623528",
    name: "Miisu",
    createdAt: 1728298569334,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  const NewCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(NewCat);

  res.send(NewCat);
};

exports.read = (req, res) => {
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.send(activeCats);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const cat = cats.find((cat) => cat.id === id);
  if (!cat) return res.status(404).send({ message: "Cat not found" });

  cat.name = name;
  cat.updatedAt = Date.now();
  res.send(cat);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const cat = cats.find((cat) => cat.id === id);
  if (!cat) return res.status(404).send({ message: "Cat not found" });

  cat.deleted = true;
  res.send({ message: "Cat successfully deleted" });
};
