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
  res.send(cats);
};

exports.update = (req, res) => {
  /*const { name } = req.params;
  const { NewName } = req.body;

  const cat = cats.find((cat) => (cat.name === name) & !cat.deleted);
  cat.name = NewName || cat.name;
  cat.updatedAt = Date.now;
  res.send(cats);*/
};

exports.delete = (req, res) => {};
