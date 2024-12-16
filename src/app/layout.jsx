import Nav from "./Components/Nav";
import "./globals.css";
  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen overflow-hidden bg-light_clr`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
