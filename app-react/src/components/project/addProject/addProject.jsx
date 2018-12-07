import React from 'react';

const AddProject = () => {
  return (
    <form class="ui large form success warning">
      <div class="eight wide field">
        <label>Name of your Project</label>
        <input type="text" name="first-name" placeholder="Project Name" />
      </div>
      <div class="eight wide field">
        <label>Category</label>
        <input type="text" name="last-name" placeholder="Category of the Project" />
      </div>

      <div class="eight wide field">
        <label>Desired completion date</label>
          <div class="two fields">
            <div class="field">
              <select class="ui fluid search dropdown" name="card[expire-month]">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div class="field">
              <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" />
            </div>
          </div>
      </div>

      <div class="ui large form">
        <div class="field">
          <label>Description of your Project</label>
          <textarea></textarea>
        </div>
      </div>

      <div class="ui success message">
        <div class="header">Form Completed!</div>
        <p>Project created successfully.</p>
      </div>

      <div class="ui warning message">
        <div class="header">Could you check something!</div>
        <ul class="list">
          <li>You cannot submit a new project without completing all the fields first.</li>
        </ul>
      </div>

      <div class="ui animated button" tabindex="0">
        <div class="visible content">Submit</div>
        <div class="hidden content">
          <i class="save outline icon"></i>
        </div>
      </div>
      {/* <button class="ui submit button" type="submit">Submit</button> */}
    </form>
  );
};

export default AddProject;
