import Userfront from "@userfront/react";

Userfront.init("wbmy6rvb");

const PasswordResetForm = Userfront.build({
  toolId: "raakomd"
});

const PasswordReset = () => {
  return (
    <PasswordResetForm />
  )
}

export default PasswordReset