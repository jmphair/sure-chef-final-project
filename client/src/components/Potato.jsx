import { Container, Card, InputGroup } from 'react-bootstrap';
import useAiPrompt from '../hooks/useAiPrompt';
// import loadingGif from "../assets/loading.gif";
// import lens from "../assets/lens.png";

function Potato() {

  const { loading, answer, sendPrompt, updatePrompt } = useAiPrompt();

  return (
    <Container>
      <Card body>
        <div className="app-container">
          <InputGroup className="spotlight__wrapper">
            <input
              type="text"
              // placeholder='Type your question here.          '
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

export default Potato;

// .spotlight__wrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   border-radius: 12px;
//   border: 1px solid #dfe1e5;
//   margin: auto;
//   max-width: 600px;
//   background-color: #fff;
// }

