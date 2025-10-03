import "./globals.css";
import Stairs from './common/Stairs'

export const metadata = {
  title: "Tanmay Suradkar",
  description: "Portfio of Tanmay Rahul suradkar, A Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Stairs>
        {children}
        </Stairs>
      </body>
    </html>
  );
}
