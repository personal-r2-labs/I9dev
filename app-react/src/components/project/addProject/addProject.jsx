import React from 'react';

const AddProject = () => {
  return (
    <form action="">
      <label htmlFor="name">Give a name for your project</label>
      <input type="text" name="name" />
      <label htmlFor="category">Choice a category</label>
      <input type="text" name="category" />
      <label htmlFor="description">Describe the job</label>
      <input type="text" name="description" />
      <label htmlFor="attachment">Attach a file</label>
      <div>
        <button>Add a file</button>
      </div>
      <label htmlFor="dateLimit"></label>
      <input type="date" name="dateLimit" id="dateLimit"/>
    </form>
  );
};

export default AddProject;
