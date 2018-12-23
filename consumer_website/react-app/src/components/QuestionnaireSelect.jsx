import React, { Component } from "react";
import Questionnaire from "./Questionnaire.jsx";
import { TextInput, Button, Pane, Text, Heading } from "evergreen-ui";

class QuestionnaireSelect extends Component {
  state = {
    id: 1
  };

  handleQuestionnaireSelect = e => {
    this.setState({ id: Number(e.target.value) });
  };

  renderQuestionnaire = id => {
    return <Questionnaire id={this.state.id} />;
  };

  render() {
    return (
      <div className="App">
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
          <div>
            <Heading size={700} margin={20}>
              - Select Questionnaire -
            </Heading>
            <TextInput
              type="number"
              name="qnum"
              defaultValue="1"
              min="1"
              max="3"
              marginBottom={20}
              onChange={this.handleQuestionnaireSelect}
              className="form-control"
            />
          </div>
        </Pane>
        <br />
        {this.renderQuestionnaire(this.state.id)}
      </div>
    );
  }
}

export default QuestionnaireSelect;
