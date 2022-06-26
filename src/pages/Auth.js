import React from "react";

export default function Auth() {
  return (
    <div>
      <form>
          <label>
              Email:
              <input type="email" name="email" />
          </label>
          <label>
              Password:
              <input type="password" name="password" />
          </label>

          <button>Sign in</button>
          <button>Sign up</button>
      </form>
    </div>
  );
}