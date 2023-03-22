import { Container, Card, InputGroup } from 'react-bootstrap';
import useAiPrompt from '../hooks/useAiPrompt';
// import loadingGif from "../assets/loading.gif";
// import lens from "../assets/lens.png";

function RobotChef() {

  const { loading, answer, sendPrompt, updatePrompt } = useAiPrompt();

  return (
    <Container>
      <Card body>
        <div className="app-container">
          <InputGroup className="spotlight__wrapper">
            <input
              type="text"
              placeholder='Type your question here.          '
              className="input-group"
              disabled={loading}
              // style={{
              //   backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
              // }}
              onChange={(e) => updatePrompt(e.target.value)}
              onKeyDown={(e) => sendPrompt(e)}
            />
            <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>          
          </InputGroup>
        </div>
      </Card>
    </Container>
  );
}

export default RobotChef;

