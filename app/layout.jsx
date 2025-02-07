export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.Js</title>
      </head>
      <body>
        <header style={{ border: '1px solid black', padding: '10px' }}>[Header]</header>
        <main>{children}</main>
        <footer style={{ border: '1px solid black', padding: '10px' }}>[Footer]</footer>
      </body>
    </html>
  );
}
