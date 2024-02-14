// auth0.js
import { Auth0Provider } from "@auth0/auth0-react";

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain="kayaimmigration.us.auth0.com"
      clientId="fqwzndPhpz7t0qGG3ss1iX7zh6NuLtp2"
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
