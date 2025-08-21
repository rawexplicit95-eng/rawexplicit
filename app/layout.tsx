import './globals.css';

export const metadata = {
  title: 'RAW Explicit Brand',
  description: 'Creative magazine, shop, and culture hub.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
