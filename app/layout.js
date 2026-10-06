import './globals.css';

export const metadata = {
  title: 'Tidewater Notes',
  description: 'A small notes app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
