import React from "react";
import { Segment, Card, Feed } from "semantic-ui-react";

const LastProjects = () => {
  return (
    <Segment>
      <Card>
        <Card.Content>
          <Card.Header>Recent Projects</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="1 day ago" />
                <Feed.Summary>
                  You addedJenny Hess to yourcoworker group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="4 days ago" />
                <Feed.Summary>
                  You addedElliot Baker to yourmusicians group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

                        <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

                        <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Date content="3 days ago" />
                <Feed.Summary>
                  You addedMolly Malone as a friend.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default LastProjects;
