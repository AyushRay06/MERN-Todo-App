export function CreateTodo() {
  return (
    <div>
      <input style={{ padding: 10 }} type="text" placeholder="title"></input>
      <br></br>
      <br></br>
      <input
        style={{ padding: 10 }}
        type="text"
        placeholder="description"
      ></input>
      <br></br>
      <br></br>
      <button
        style={{
          backgroundColor: "yellowgreen",
          border: "none",
          padding: 15,
          cursor: "pointer",
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
