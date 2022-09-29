import styled, { keyframes } from 'styled-components'

const P = styled.p`
    font-size: 24px;
    color: red;
  `

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'wite': 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;

  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3)
  }

  &.secondary {
    background-color: blue;
    border-color: blue;
    color: #fff;
  }

  .info {
    font-size: 28px;
  }
`
const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, children, ...props }) => {
  return <a className={className} {...props} >{ children }</a>
}

const StyledLink = styled(Link)`
  color: blue;
`
const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props => props.color}
`

const Password = styled(Input).attrs({
  type: 'password'
})``

const roll = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation : ${roll} 2s linear infinite;
`

const App = () => {
  return(
    <Content>
      <P>Hi there!</P>
      <Button>Send</Button>
      <Button>Send <p className="info">My Info</p> </Button>
      <Button primary>Send</Button>
      <Button primary className="secondary">Send</Button>
      <BlockButton primary as="a" href="#">Send</BlockButton>
      <BlockButton primary>Send</BlockButton>
      <Link>My Link</Link>
      <StyledLink>My Link</StyledLink>
      <Input />
      <Password />
      <br />
      <Rotate>Rotating</Rotate>
    </Content>
  )
}

export default App;
