import React from 'react'
import Userfront from "@userfront/react";

Userfront.init("wbmy6rvb");

const LogoutButton = Userfront.build({
  toolId: "kddmnlr"
});

function Logout() {
  return (
    <div>
     <LogoutButton />;
    </div>
  )
}

export default Logout