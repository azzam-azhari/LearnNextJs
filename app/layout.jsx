export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.Js</title>
      </head>
      <body>
        <header style={{ border: '1px solid black' }}>[Header]</header>
        <main>{children}</main>
        <footer style={{ border: '1px solid black' }}>[Footer]</footer>
      </body>
    </html>
  );
}
