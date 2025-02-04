export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.Js</title>
      </head>
      <body>
        <header>[Header]</header>
        <main>{children}</main>
        <footer>[Footer]</footer>
      </body>
    </html>
  );
}
