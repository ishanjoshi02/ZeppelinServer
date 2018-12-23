import React, { Component } from "react";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.id);
  }

  renderQuestionnaire = id => {
    let template = null;
    switch (id) {
      case 1: {
        template = (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            margin={20}
            width={350}
            background={"tint2"}
            elevation={2}
          >
            <form>
              <div>
                <Heading size={700} margin={20}>
                  Check if bank balance is higher than given value
                </Heading>
              </div>
              <div>
                <label>First Name:</label>
                <TextInput type="text" name="fname" />
              </div>
              <br />
              <div>
                <label>Last Name:</label>
                <TextInput type="text" name="lname" />
              </div>
              <br />
              <div>
                <label>Credit Card No. (last 4 digits):</label>
                <TextInput type="text" name="creditNum" defaultValue="" />
              </div>
              <br />
              <div>
                <label>enter amount to check:</label>
                <TextInput
                  type="number"
                  name="amount"
                  step="5000"
                  defaultValue="10000"
                  min="0"
                  ref="amount"
                />
              </div>
              <br />
              <div>
                <Button
                  appearance="primary"
                  intent="success"
                  type="submit"
                  margin={20}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Pane>
        );
        break;
      }
      case 2: {
        template = (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            margin={20}
            width={350}
            background={"tint2"}
            elevation={2}
          >
            <form>
              <div>
                <Heading size={700} margin={20}>
                  Check if age is above given value
                </Heading>
              </div>
              <div>
                <label>First Name:</label>
                <TextInput type="text" name="fname" />
              </div>
              <br />
              <div>
                <label>Last Name:</label>
                <TextInput type="text" name="lname" />
              </div>
              <br />
              <div>
                <label>enter age to check:</label>
                <TextInput type="number" name="age" defaultValue="18" />
              </div>
              <br />
              <div>
                <Button
                  appearance="primary"
                  intent="success"
                  type="submit"
                  margin={20}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Pane>
        );
        break;
      }
      case 3: {
        template = (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="default"
            margin={20}
            width={350}
            background={"tint2"}
            elevation={2}
          >
            <form>
              <div>
                <Heading size={700} margin={20}>
                  Check if owner belongs to a location
                </Heading>
              </div>
              <div>
                <label>First Name:</label>
                <TextInput type="text" name="fname" />
              </div>
              <br />
              <div>
                <label>Last Name:</label>
                <TextInput type="text" name="lname" />
              </div>
              <br />
              <div>
                <label>enter location to check:</label>
                <TextInput type="text" name="location" defaultValue="" />
              </div>
              <br />
              <div>
                <Button
                  appearance="primary"
                  intent="success"
                  type="submit"
                  margin={20}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Pane>
        );
        break;
      }
      default: {
        template = null;
      }
    }
    return template;
  };

  render() {
    const qID = this.props.id;
    return <div>{this.renderQuestionnaire(qID)}</div>;
  }
}

export default Questionnaire;
