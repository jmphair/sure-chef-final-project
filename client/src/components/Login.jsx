import Userfront from "@userfront/react";

Userfront.init("wbmy6rvb");

const LoginForm = Userfront.build({
  toolId: "baaormn"
});

const Login = () => {
  return (
    <div>
     <LoginForm />
    </div>
  )
}

export default Login