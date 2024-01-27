interface Expanse {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface Props {
  expanse: Expanse[];
  onDelete: (id: number) => void;
}

const ExpanseTracker = ({ expanse, onDelete }: Props) => {
  console.log(expanse);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expanse.map((expan) => (
          <tr key={expan.id}>
            {" "}
            <td>{expan.description}</td>
            <td>{expan.amount}</td>
            <td>{expan.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expan.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            ${expanse.reduce((acc, expan) => expan.amount + acc, 0).toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpanseTracker;
