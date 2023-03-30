export function Step1({value, onChange }) {
  return (
    <div>
      <h2>Step 1</h2>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="data1">
          Data 1
        </label>
        <input
          type="text"
          name="data1"
          id="data1"
          className="col-sm-10 form-control"
          defaultValue={value}
          onChange={(e) => {
            onChange(prev=>e.target.value);
          }}
        />
      </div>
    </div>
  );
}
