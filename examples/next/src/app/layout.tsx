export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#f3f4f6" }}>{children}</body>
    </html>
  );
}
