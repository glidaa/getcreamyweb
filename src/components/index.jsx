import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default function index() {
  return (
    <div>
      <h1>you are logged in</h1>
      <AmplifySignOut />
    </div>
  );
}
