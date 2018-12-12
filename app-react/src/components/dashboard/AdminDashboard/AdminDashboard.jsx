import React, { Component } from "react";
import TesteNavBar from "../shared/NavBar/testeNavBar";
import { Segment, Table } from "semantic-ui-react";

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TesteNavBar />
        <Segment>

          <Table celled selectable>
            
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>No Action</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              
              <Table.Row warning>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>No Action</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell positive>Approved</Table.Cell>
                <Table.Cell warning>Requires call</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell negative>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            
            </Table.Body>
          </Table>

        </Segment>
      </div>
    );
  }
}

export default AdminDashboard;
