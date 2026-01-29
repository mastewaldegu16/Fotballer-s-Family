export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial', padding: 20 }}>
        <h1>⚽ Footballer's Family</h1>
        {children}
      </body>
    </html>
  )
}
