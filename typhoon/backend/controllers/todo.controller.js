const todos = [];

exports.create = (req, res) => {
  const { title, priority } = req.body;

  const newTodo = {
    id: crypto.randomUUID(),
    title,
    priority,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newTodo);
  res.send(newTodo);
};

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.send(activeTodos);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title, priority } = req.body;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return res.status(404).send({ message: "TODO not found" });

  todo.title = title;
  todo.priority = priority;
  todo.updatedAt = Date.now();
  res.send(todo);
};

exports.delete = (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return res.status(404).send({ message: "TODO not found" });

  todo.deleted = true;
  res.send({ message: "TODO successfully deleted" });
};
