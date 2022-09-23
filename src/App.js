import styled from 'styled-components'

const App = () => {
  const P = styled.p`
    font-size: 24px;
    color: red;
  `

  const Content = styled.div`
    padding: 20px 25px;
  `

  const Button = styled.button`
    background-color: ${props => props.primary ? 'red' : 'white'};
    color: ${props => props.primary ? 'wite': 'red'};
    padding: 10px 15px;
    border: solid 2px red;
    border-radius: 4px;
  `
  const BlockButton = styled(Button)`
    width: 100%;
    font-size: 24px;
  `

  return(
    <Content>
      <P>Hi there!</P>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <BlockButton>Send</BlockButton>
    </Content>
  )
}

export default App;
