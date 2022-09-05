export default function Form(props) {
  return (
    <div>
      <form>
        <h2 className="">
          <label> O que eu preciso fazer?</label>
        </h2>
        {/* <input
          type="text"
          id="nova-tarefa-input"
          className="input-group rounded"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        /> */}
        <button type="submit" className="m-1 btn-warning">
          Adicionar
        </button>
      </form>
    </div>
  );
}
