export function Step2({ value: { data1, data2 }, onChange }) {
  return (
    <div>
      <h2>Step 2</h2>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="data1">
          Data 1
        </label>
        <input
          type="text"
          name="data1"
          id="data1"
          className="col-sm-10 form-control"
          onChange={(e) => {
            onChange((prev) => ({ ...prev, data1: e.target.value }));
          }}
          defaultValue={data1}
        />
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="data2">
          Data 2
        </label>
        <input
          type="text"
          name="data2"
          id="data2"
          className="col-sm-10 form-control"
          defaultValue={data2}
          onChange={(e) => {
            onChange((prev) => ({ ...prev, data2: e.target.value }));
          }}
        />
      </div>
    </div>
  );
}
