import "./globals.css";

export const metadata = {
  title: "Ai Asker",
  description: "your personal chatbot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
