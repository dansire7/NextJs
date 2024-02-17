import "./globals.css";
import Nav from "./comp/nav";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        {children}
        <h1>Parent Layout</h1>
      </body>
    </html>
  );
}
